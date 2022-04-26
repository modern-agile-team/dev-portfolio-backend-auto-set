import { PartialType } from '@nestjs/mapped-types';
import { CreateHeaderBarDto } from './create-header-bar.dto';

export class UpdateHeaderBarDto extends PartialType(CreateHeaderBarDto) {}
