import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //customise
  const newHeaders = new HttpHeaders({
    'Constent-Type' : "application/json",
    // 'Bearer' : localStorage.getItem('token');
  });
  const clone = req.clone ({
    headers : newHeaders
  })
  //end 
  return next(clone);
};
