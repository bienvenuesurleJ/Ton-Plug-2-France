self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{let d={};try{d=e.data.json();}catch(_){}
 e.waitUntil(self.registration.showNotification(d.title||"Plug 2 France",{body:d.body||"",icon:"icon-192.png",badge:"icon-192.png",data:{url:d.url||"./#/admin"}}));});
self.addEventListener("notificationclick",e=>{e.notification.close();
 const u=new URL(e.notification.data.url,self.registration.scope).href;
 e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(l=>{for(const c of l){if("focus" in c){c.navigate(u);return c.focus();}}return self.clients.openWindow(u);}));});

