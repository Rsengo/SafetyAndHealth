import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { DocumentTemplateDto, DocumentTemplateCreateUpdateDto } from '../../models/DocumentTemplate';

class DocumentTemplateRequester extends BaseRequester {
    getAll(): Promise<DocumentTemplateDto[]> {
        return this._get<DocumentTemplateDto[]>(ApiConstants.routes.documentTemplate.getAll);
    }

    download(documentTemplateId: number): void {
        this._download(`${ApiConstants.baseUrl}/${ApiConstants.routes.documentTemplate.download}/${documentTemplateId}`);
    }

    create(documentTemplate: DocumentTemplateCreateUpdateDto): Promise<DocumentTemplateDto> {
        return this._post<DocumentTemplateDto>(ApiConstants.routes.documentTemplate.create, documentTemplate);
    }

    delete(documentTemplateId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.documentTemplate.delete}/${documentTemplateId}`);
    }
}

export default DocumentTemplateRequester;