import { API_BASE_URL } from '../../config/config';
import { JSON_SUFFIX } from '../../util/constants';
import HttpService from '../httpService';
import { IAxiosService } from '../interfaces/service';
import { getArrayFromObject } from '../../util/util';
import IDocumentTypeService from '../interfaces/documentTypeService';
import IDocumentType from '../../models/documentType/IDocumentType';

const DOCUMENT_TYPES_BASE_URL = 'documentTypes';

class DocumentTypeHttpService implements IDocumentTypeService {
  constructor(baseUrl?: string) {
    this.service = new HttpService(`${baseUrl || API_BASE_URL}${DOCUMENT_TYPES_BASE_URL}`);
  }
  service: IAxiosService;
  getAllDocumentTypes = async (): Promise<IDocumentType[]> => 
    getArrayFromObject(await this.service.get(JSON_SUFFIX).then(response => response.data));
}

const documentTypeHttpService = new DocumentTypeHttpService();

export {
  documentTypeHttpService,
};