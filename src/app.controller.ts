import { Controller,Get} from "@nestjs/common";


@Controller('/app')  // High Level Routing
   export class AppController{
    @Get('/res')  //low Level Routing
      getRootRoute(){
        return "hii  server ";
      }
     @Get('/bey')
        getbey(){
            return "this bey Route"
        } 
  }