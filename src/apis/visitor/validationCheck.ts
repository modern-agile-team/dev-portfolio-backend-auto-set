import { IsDateString, Length } from 'class-validator';

class VisitorCmtDtoValidation {
  @Length(3, 20)
  public nickname!: string;

  @Length(8, 20)
  public password!: string;

  @Length(1, 250)
  public description!: string;

  @IsDateString()
  public date!: string;
}

class UpdateValidation {
  @Length(8, 20)
  public password!: string;

  @Length(1, 250)
  public description!: string;
}

export { UpdateValidation, VisitorCmtDtoValidation };
