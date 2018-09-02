import { Get, Controller } from '@nestjs/common';
import {ApiUseTags} from "@nestjs/swagger";

@ApiUseTags('Demo')
@Controller("Demo")
export class DemoController {
  constructor() {}

  @Get()
  root(): string {
    return "demo"
  }
}
