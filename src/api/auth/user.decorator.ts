import { createParamDecorator, ExecutionContext } from "@nestjs/common";

//Este decorador no se setea(undefined) si no pasa por la autenticacion por token, @UseGuards(AuthGuard())

export const User = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      const user = request.user;
  
      return data ? user && user[data] : user;
    }
);