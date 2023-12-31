import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { OnModuleInit } from '@nestjs/common';
import { BadWordsEntity } from './badwords.entity';
import { Repository } from 'typeorm';
import { QueryBadWordsDto } from './dto/queryBadWords.dto';
import { UpdateBadWordsDto } from './dto/updateBadWords.dto';
import { DelBadWordsDto } from './dto/delBadWords.dto';
import { AddBadWordDto } from './dto/addBadWords.dto';
export declare class BadwordsService implements OnModuleInit {
    private readonly badWordsEntity;
    private readonly globalConfigService;
    private badWords;
    constructor(badWordsEntity: Repository<BadWordsEntity>, globalConfigService: GlobalConfigService);
    onModuleInit(): Promise<void>;
    checkBadWords(content: string): Promise<boolean>;
    baiduCheckBadWords(content: string, accessToken: string): Promise<{
        success: boolean;
        msg: string;
    }>;
    loadBadWords(): Promise<void>;
    queryBadWords(query: QueryBadWordsDto): Promise<{
        rows: BadWordsEntity[];
        count: number;
    }>;
    delBadWords(body: DelBadWordsDto): Promise<string>;
    updateBadWords(body: UpdateBadWordsDto): Promise<string>;
    addBadWord(body: AddBadWordDto): Promise<string>;
}
