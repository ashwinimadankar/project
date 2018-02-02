import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthserviceProvider {
  apiUrl:String = 'http://localhost:3000/';//192.168.43.179
  constructor(private http: Http) {
    console.log('Hello AuthserviceProvider Provider');
  }
//service for registration
  postData(user, string) {
    const headers = new Headers();
    headers.append("content-type", "application/json");
   const options = new RequestOptions({headers: headers});

    console.log("user.........",user);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+string, JSON.stringify(user),options)
      .map(res => res.json())
        .subscribe(res => {
          console.log("this.data",res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

//for login

postDatalogin(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string,JSON.stringify(user),options)
      .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}
 // service for locality selector
  
 citylocalityselector(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string,JSON.stringify(user),options)
      .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

cityselector(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string,JSON.stringify(user),options)
      .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}


stateselector(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string,JSON.stringify(user),options)
      .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}


//service for rating
ratingtaDa(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string, JSON.stringify(user),options)
    .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}


//hospitals
hospitalData(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string, JSON.stringify(user),options)
    .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

//parks
parkData(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string, JSON.stringify(user),options)
    .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

//police station
policeData(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string, JSON.stringify(user),options)
    .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

//hospitals
schoolData(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string, JSON.stringify(user),options)
    .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}


//userprofile service
userprofile(user, string) {
  const headers = new Headers();
  headers.append("content-type", "application/json");
 const options = new RequestOptions({headers: headers});

  console.log("user.........",user);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+string, JSON.stringify(user),options)
    .map(res => res.json())
      .subscribe(res => {
        console.log("this.data",res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

}
