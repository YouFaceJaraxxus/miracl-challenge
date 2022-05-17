import IDocumentType from '../../models/documentType/IDocumentType';

export default interface IDocumentTypeService {
  getAllDocumentTypes: () => Promise<IDocumentType[]>;
};

