import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      // to implement: do something
    } else {
      console.error(error); // <-- keep default behavior for now
    }
  }

}
