import { API_BASE_URL } from '../../config/config';
import IDocument from '../../models/document/IDocument';
import { JSON_SUFFIX } from '../../util/constants';
import HttpService from '../httpService';
import IDocumentService, { ICreateDocument, IDeleteResponse, IGetAllDocumentsResponse, IPatchDocument } from '../interfaces/documentService';
import { IAxiosService, IServiceConfig } from '../interfaces/service';
import { getArrayFromObject } from '../../util/util';

const DOCUMENTS_BASE_URL = 'documents';

class DocumentHttpService implements IDocumentService {
  constructor(baseUrl?: string) {
    this.service = new HttpService(`${baseUrl || API_BASE_URL}${DOCUMENTS_BASE_URL}`);
  }
  service: IAxiosService;
  getAllDocuments = async (config?: IServiceConfig): Promise<IGetAllDocumentsResponse> => {
    const documents: IDocument[] = getArrayFromObject(await this.service.get(JSON_SUFFIX, config).then(response => response.data));
    let response: IGetAllDocumentsResponse = {
      count: documents.length,
      documents,
    };
    if (config) {
      const { limit, offset } = config;
      if (limit && offset) {
        response.documents = documents.slice(offset, limit + offset);
      }
    }
    return response;
  }
  getDocumentById = (id: string): Promise<IDocument> => this.service.get(`/${id}${JSON_SUFFIX}`).then(response => response.data);
  createDocument = (document: ICreateDocument): Promise<IDocument> => this.service.post(`${JSON_SUFFIX}`, document).then(response => response.data);
  updateDocument = (document: IDocument): Promise<IDocument> => this.service.put(`/${document.id}${JSON_SUFFIX}`, document).then(response => response.data);
  patchDocument = (document: IPatchDocument): Promise<IDocument> => this.service.patch(`/${document.id}${JSON_SUFFIX}`, document).then(response => response.data);
  deleteDocument = async (id: string): Promise<IDeleteResponse> => {
    try {
      await this.service.delete(`/${id}${JSON_SUFFIX}`);
      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }
}

const documentHttpService = new DocumentHttpService();

export {
  documentHttpService,
};