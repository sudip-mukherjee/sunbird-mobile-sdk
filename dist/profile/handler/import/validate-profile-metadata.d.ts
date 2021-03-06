import { DbService } from '../../../db';
import { Response } from '../../../api';
import { ImportProfileContext } from '../../def/import-profile-context';
export declare class ValidateProfileMetadata {
    private dbService;
    constructor(dbService: DbService);
    execute(importContext: ImportProfileContext): Promise<Response>;
    private getImportTypes;
}
