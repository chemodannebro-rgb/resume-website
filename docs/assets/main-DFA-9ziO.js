import{a as e,c as t,d as n,f as r,h as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./useReveal-DsAScTeX.js";var h=i(u(),1),g=r(),_=1e3,v=1001,y=1002,b=1003,x=1004,S=1005,C=1006,w=1007,T=1008,E=1009,D=1010,O=1011,k=1012,ee=1013,te=1014,ne=1015,re=1016,A=1017,j=1018,M=1020,ie=35902,ae=1021,oe=1022,N=1023,se=1026,ce=1027,le=1028,P=1029,ue=1030,de=1031,fe=1033,pe=33776,me=33777,F=33778,I=33779,L=35840,he=35841,R=35842,ge=35843,z=36196,_e=37492,B=37496,V=37808,ve=37809,ye=37810,H=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,U=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,Ie=2300,Le=2301,Re=2302,ze=2400,Be=2401,W=2402,Ve=3200,G=3201,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=2e3,Ye=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Xe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ze=Math.PI/180,Qe=180/Math.PI;function $e(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xe[e&255]+Xe[e>>8&255]+Xe[e>>16&255]+Xe[e>>24&255]+`-`+Xe[t&255]+Xe[t>>8&255]+`-`+Xe[t>>16&15|64]+Xe[t>>24&255]+`-`+Xe[n&63|128]+Xe[n>>8&255]+`-`+Xe[n>>16&255]+Xe[n>>24&255]+Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function et(e,t){return(e%t+t)%t}function tt(e,t,n){return(1-n)*e+n*t}function nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var it=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(st.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(st.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ot.copy(this).projectOnVector(e),this.sub(ot)}reflect(e){return this.sub(ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ot=new q,st=new at,J=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ct.makeScale(e,t)),this}rotate(e){return this.premultiply(ct.makeRotation(-e)),this}translate(e,t){return this.premultiply(ct.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ct=new J;function lt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ut(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function dt(){let e=ut(`canvas`);return e.style.display=`block`,e}var ft={};function pt(e){e in ft||(ft[e]=!0,console.warn(e))}function mt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function ht(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var _t=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return pt(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return pt(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:_t,fromXYZ:vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:_t,fromXYZ:vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Y=yt();function bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var St,Ct=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{St===void 0&&(St=ut(`canvas`)),St.width=e.width,St.height=e.height;let t=St.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=St}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ut(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bt(t[e]/255)*255):t[e]=bt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wt=0,Tt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=$e(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Et(r[t].image)):e.push(Et(r[t]))}else e=Et(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Et(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Dt=0,Ot=new q,kt=class e extends Ye{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=v,i=v,a=C,o=T,s=N,c=E,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=$e(),this.name=``,this.source=new Tt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ot).x}get height(){return this.source.getSize(Ot).y}get depth(){return this.source.getSize(Ot).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _:e.x-=Math.floor(e.x);break;case v:e.x=e.x<0?0:1;break;case y:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case _:e.y-=Math.floor(e.y);break;case v:e.y=e.y<0?0:1;break;case y:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=300,kt.DEFAULT_ANISOTROPY=1;var At=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jt=class extends Ye{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:C,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let r=new kt({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:C,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Tt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mt=class extends jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nt=class extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=b,this.minFilter=b,this.wrapR=v,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pt=class extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=b,this.minFilter=b,this.wrapR=v,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ft=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Lt):Lt.fromBufferAttribute(r,t),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Rt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Rt.copy(e.boundingBox)),Rt.applyMatrix4(e.matrixWorld),this.union(Rt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gt),Kt.subVectors(this.max,Gt),zt.subVectors(e.a,Gt),Bt.subVectors(e.b,Gt),Vt.subVectors(e.c,Gt),Ht.subVectors(Bt,zt),Ut.subVectors(Vt,Bt),Wt.subVectors(zt,Vt);let t=[0,-Ht.z,Ht.y,0,-Ut.z,Ut.y,0,-Wt.z,Wt.y,Ht.z,0,-Ht.x,Ut.z,0,-Ut.x,Wt.z,0,-Wt.x,-Ht.y,Ht.x,0,-Ut.y,Ut.x,0,-Wt.y,Wt.x,0];return!Yt(t,zt,Bt,Vt,Kt)||(t=[1,0,0,0,1,0,0,0,1],!Yt(t,zt,Bt,Vt,Kt))?!1:(qt.crossVectors(Ht,Ut),t=[qt.x,qt.y,qt.z],Yt(t,zt,Bt,Vt,Kt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(It[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),It[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),It[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),It[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),It[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),It[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),It[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),It[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(It),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},It=[new q,new q,new q,new q,new q,new q,new q,new q],Lt=new q,Rt=new Ft,zt=new q,Bt=new q,Vt=new q,Ht=new q,Ut=new q,Wt=new q,Gt=new q,Kt=new q,qt=new q,Jt=new q;function Yt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Jt.fromArray(e,a);let o=i.x*Math.abs(Jt.x)+i.y*Math.abs(Jt.y)+i.z*Math.abs(Jt.z),s=t.dot(Jt),c=n.dot(Jt),l=r.dot(Jt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Xt=new Ft,Zt=new q,Qt=new q,$t=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Xt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zt.subVectors(e,this.center);let t=Zt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Zt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zt.copy(e.center).add(Qt)),this.expandByPoint(Zt.copy(e.center).sub(Qt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},en=new q,tn=new q,nn=new q,rn=new q,an=new q,on=new q,sn=new q,cn=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tn.copy(e).add(t).multiplyScalar(.5),nn.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(tn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(nn),o=rn.dot(this.direction),s=-rn.dot(nn),c=rn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(tn).addScaledVector(nn,d),f}intersectSphere(e,t){en.subVectors(e.center,this.origin);let n=en.dot(this.direction),r=en.dot(en)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,r,i){an.subVectors(t,e),on.subVectors(n,e),sn.crossVectors(an,on);let a=this.direction.dot(sn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rn.subVectors(this.origin,e);let s=o*this.direction.dot(on.crossVectors(rn,on));if(s<0)return null;let c=o*this.direction.dot(an.cross(rn));if(c<0||s+c>a)return null;let l=-o*rn.dot(sn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/un.setFromMatrixColumn(e,0).length(),i=1/un.setFromMatrixColumn(e,1).length(),a=1/un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fn,e,pn)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),mn.crossVectors(n,gn),mn.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),mn.crossVectors(n,gn)),mn.normalize(),hn.crossVectors(gn,mn),r[0]=mn.x,r[4]=hn.x,r[8]=gn.x,r[1]=mn.y,r[5]=hn.y,r[9]=gn.y,r[2]=mn.z,r[6]=hn.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],j=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*re,i[4]=a*S+o*E+s*ee+c*A,i[8]=a*C+o*D+s*te+c*j,i[12]=a*w+o*O+s*ne+c*M,i[1]=l*x+u*T+d*k+f*re,i[5]=l*S+u*E+d*ee+f*A,i[9]=l*C+u*D+d*te+f*j,i[13]=l*w+u*O+d*ne+f*M,i[2]=p*x+m*T+h*k+g*re,i[6]=p*S+m*E+h*ee+g*A,i[10]=p*C+m*D+h*te+g*j,i[14]=p*w+m*O+h*ne+g*M,i[3]=_*x+v*T+y*k+b*re,i[7]=_*S+v*E+y*ee+b*A,i[11]=_*C+v*D+y*te+b*j,i[15]=_*w+v*O+y*ne+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=un.set(r[0],r[1],r[2]).length(),a=un.set(r[4],r[5],r[6]).length(),o=un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);let s=1/i,c=1/a,l=1/o;return dn.elements[0]*=s,dn.elements[1]*=s,dn.elements[2]*=s,dn.elements[4]*=c,dn.elements[5]*=c,dn.elements[6]*=c,dn.elements[8]*=l,dn.elements[9]*=l,dn.elements[10]*=l,t.setFromRotationMatrix(dn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Je){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},un=new q,dn=new ln,fn=new q(0,0,0),pn=new q(1,1,1),mn=new q,hn=new q,gn=new q,_n=new ln,vn=new at,yn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _n.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_n,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vn.setFromEuler(this),this.setFromQuaternion(vn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER=`XYZ`;var bn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},xn=0,Sn=new q,Cn=new at,wn=new ln,Tn=new q,En=new q,Dn=new q,On=new at,kn=new q(1,0,0),An=new q(0,1,0),jn=new q(0,0,1),Mn={type:`added`},Nn={type:`removed`},Pn={type:`childadded`,child:null},Fn={type:`childremoved`,child:null},In=class e extends Ye{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xn++}),this.uuid=$e(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new yn,r=new at,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ln},normalMatrix:{value:new J}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(kn,e)}rotateY(e){return this.rotateOnAxis(An,e)}rotateZ(e){return this.rotateOnAxis(jn,e)}translateOnAxis(e,t){return Sn.copy(e).applyQuaternion(this.quaternion),this.position.add(Sn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kn,e)}translateY(e){return this.translateOnAxis(An,e)}translateZ(e){return this.translateOnAxis(jn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tn.copy(e):Tn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),En.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(En,Tn,this.up):wn.lookAt(Tn,En,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Cn.setFromRotationMatrix(wn),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,e,Dn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,On,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};In.DEFAULT_UP=new q(0,1,0),In.DEFAULT_MATRIX_AUTO_UPDATE=!0,In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new q,Rn=new q,zn=new q,Bn=new q,Vn=new q,Hn=new q,Un=new q,Wn=new q,Gn=new q,Kn=new q,qn=new At,Jn=new At,Yn=new At,Xn=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ln.subVectors(r,t),Rn.subVectors(n,t),zn.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(Rn),s=Ln.dot(zn),c=Rn.dot(Rn),l=Rn.dot(zn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)!==null&&Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Bn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Bn.x),s.addScaledVector(a,Bn.y),s.addScaledVector(o,Bn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return qn.setScalar(0),Jn.setScalar(0),Yn.setScalar(0),qn.fromBufferAttribute(e,t),Jn.fromBufferAttribute(e,n),Yn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qn,i.x),a.addScaledVector(Jn,i.y),a.addScaledVector(Yn,i.z),a}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Rn.subVectors(e,t),Ln.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Vn.subVectors(r,n),Hn.subVectors(i,n),Wn.subVectors(e,n);let s=Vn.dot(Wn),c=Hn.dot(Wn);if(s<=0&&c<=0)return t.copy(n);Gn.subVectors(e,r);let l=Vn.dot(Gn),u=Hn.dot(Gn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Vn,a);Kn.subVectors(e,i);let f=Vn.dot(Kn),p=Hn.dot(Kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Un.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Un,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Vn,a).addScaledVector(Hn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},$n={h:0,s:0,l:0};function er(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var tr=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=et(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=er(i,r,e+1/3),this.g=er(i,r,e),this.b=er(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Zn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Y.workingToColorSpace(nr.copy(this),e),Math.round(K(nr.r*255,0,255))*65536+Math.round(K(nr.g*255,0,255))*256+Math.round(K(nr.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(nr.copy(this),t);let n=nr.r,r=nr.g,i=nr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(nr.copy(this),t),e.r=nr.r,e.g=nr.g,e.b=nr.b,e}getStyle(e=He){Y.workingToColorSpace(nr.copy(this),e);let t=nr.r,n=nr.g,r=nr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL($n);let n=tt(Qn.h,$n.h,t),r=tt(Qn.s,$n.s,t),i=tt(Qn.l,$n.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nr=new tr;tr.NAMES=Zn;var rr=0,ir=class extends Ye{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rr++}),this.uuid=$e(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ar=class extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new tr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},or=new q,sr=new it,cr=0,lr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=ne,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXYZ(t,or.x,or.y,or.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix4(e),this.setXYZ(t,or.x,or.y,or.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyNormalMatrix(e),this.setXYZ(t,or.x,or.y,or.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.transformDirection(e),this.setXYZ(t,or.x,or.y,or.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nt(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nt(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nt(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},ur=class extends lr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},dr=class extends lr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},fr=class extends lr{constructor(e,t,n){super(new Float32Array(e),t,n)}},pr=0,mr=new ln,hr=new In,gr=new q,_r=new Ft,vr=new Ft,yr=new q,br=class e extends Ye{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pr++}),this.uuid=$e(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(lt(e)?dr:ur)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mr.makeRotationFromQuaternion(e),this.applyMatrix4(mr),this}rotateX(e){return mr.makeRotationX(e),this.applyMatrix4(mr),this}rotateY(e){return mr.makeRotationY(e),this.applyMatrix4(mr),this}rotateZ(e){return mr.makeRotationZ(e),this.applyMatrix4(mr),this}translate(e,t,n){return mr.makeTranslation(e,t,n),this.applyMatrix4(mr),this}scale(e,t,n){return mr.makeScale(e,t,n),this.applyMatrix4(mr),this}lookAt(e){return hr.lookAt(e),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new fr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];_r.setFromBufferAttribute(n),this.morphTargetsRelative?(yr.addVectors(this.boundingBox.min,_r.min),this.boundingBox.expandByPoint(yr),yr.addVectors(this.boundingBox.max,_r.max),this.boundingBox.expandByPoint(yr)):(this.boundingBox.expandByPoint(_r.min),this.boundingBox.expandByPoint(_r.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(_r.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];vr.setFromBufferAttribute(n),this.morphTargetsRelative?(yr.addVectors(_r.min,vr.min),_r.expandByPoint(yr),yr.addVectors(_r.max,vr.max),_r.expandByPoint(yr)):(_r.expandByPoint(vr.min),_r.expandByPoint(vr.max))}_r.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)yr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(yr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)yr.fromBufferAttribute(a,t),o&&(gr.fromBufferAttribute(e,t),yr.add(gr)),r=Math.max(r,n.distanceToSquared(yr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new lr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new it,f=new it,p=new it,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new lr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yr.fromBufferAttribute(e,t),yr.normalize(),e.setXYZ(t,yr.x,yr.y,yr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new lr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},xr=new ln,Sr=new cn,Cr=new $t,wr=new q,Tr=new q,Er=new q,Dr=new q,Or=new q,kr=new q,Ar=new q,jr=new q,Mr=class extends In{constructor(e=new br,t=new ar){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){kr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Or.fromBufferAttribute(s,e),a?kr.addScaledVector(Or,r):kr.addScaledVector(Or.sub(t),r))}t.add(kr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Sr.copy(e.ray).recast(e.near),!(Cr.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Cr,wr)===null||Sr.origin.distanceToSquared(wr)>(e.far-e.near)**2))&&(xr.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(xr),(n.boundingBox===null||Sr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Pr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Pr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Pr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Pr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Nr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;jr.copy(s),jr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(jr);return l<n.near||l>n.far?null:{distance:l,point:jr.clone(),object:e}}function Pr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Tr),e.getVertexPosition(c,Er),e.getVertexPosition(l,Dr);let u=Nr(e,t,n,r,Tr,Er,Dr,Ar);if(u){let e=new q;Xn.getBarycoord(Ar,Tr,Er,Dr,e),i&&(u.uv=Xn.getInterpolatedAttribute(i,s,c,l,e,new it)),a&&(u.uv1=Xn.getInterpolatedAttribute(a,s,c,l,e,new it)),o&&(u.normal=Xn.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Xn.getNormal(Tr,Er,Dr,t.normal),u.face=t,u.barycoord=e}return u}var Fr=class e extends br{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new fr(c,3)),this.setAttribute(`normal`,new fr(l,3)),this.setAttribute(`uv`,new fr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ir(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Lr(e){let t={};for(let n=0;n<e.length;n++){let r=Ir(e[n]);for(let e in r)t[e]=r[e]}return t}function Rr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Y.workingColorSpace}var Br={clone:Ir,merge:Lr},Vr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ur=class extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vr,this.fragmentShader=Hr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Rr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wr=class extends In{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gr=new q,Kr=new it,qr=new it,Jr=class extends Wr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ze*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qe*2*Math.atan(Math.tan(Ze*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,Kr,qr),t.subVectors(qr,Kr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ze*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yr=-90,Xr=1,Zr=class extends In{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jr(Yr,Xr,e,t);r.layers=this.layers,this.add(r);let i=new Jr(Yr,Xr,e,t);i.layers=this.layers,this.add(i);let a=new Jr(Yr,Xr,e,t);a.layers=this.layers,this.add(a);let o=new Jr(Yr,Xr,e,t);o.layers=this.layers,this.add(o);let s=new Jr(Yr,Xr,e,t);s.layers=this.layers,this.add(s);let c=new Jr(Yr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qr=class extends kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$r=class extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fr(5,5,5),i=new Ur({name:`CubemapFromEquirect`,uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Mr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=C),new Zr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ei=class extends In{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ti={type:`move`},ni=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ti)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ri=class extends In{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new q,ai=new q,oi=new J,si=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ii.subVectors(n,t).cross(ai.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ii),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||oi.getNormalMatrix(e),r=this.coplanarPoint(ii).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new $t,li=new q,ui=class{constructor(e=new si,t=new si,n=new si,r=new si,i=new si,a=new si){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(li.x=r.normal.x>0?e.max.x:e.min.x,li.y=r.normal.y>0?e.max.y:e.min.y,li.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(li)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},di=class extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new tr(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fi=new ln,pi=new cn,mi=new $t,hi=new q,gi=class extends In{constructor(e=new br,t=new di){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mi.copy(n.boundingSphere),mi.applyMatrix4(r),mi.radius+=i,e.ray.intersectsSphere(mi)===!1)return;fi.copy(r).invert(),pi.copy(e.ray).applyMatrix4(fi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);hi.fromBufferAttribute(l,n),_i(hi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)hi.fromBufferAttribute(l,a),_i(hi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _i(e,t,n,r,i,a,o){let s=pi.distanceSqToPoint(e);if(s<n){let n=new q;pi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var vi=class extends kt{constructor(e,t,n=te,r,i,a,o=b,s=b,c,l=se,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yi=class e extends br{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new fr(p,3)),this.setAttribute(`normal`,new fr(m,3)),this.setAttribute(`uv`,new fr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bi=class extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xi=class extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Si(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ci(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ti=class extends wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case W:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case W:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ei=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Di=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Si(t,this.TimeBufferType),this.values=Si(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Si(e.times,Array),values:Si(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Di(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ei(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ti(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ci(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Oi.prototype.ValueTypeName=``,Oi.prototype.TimeBufferType=Float32Array,Oi.prototype.ValueBufferType=Float32Array,Oi.prototype.DefaultInterpolation=Le;var ki=class extends Oi{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName=`bool`,ki.prototype.ValueBufferType=Array,ki.prototype.DefaultInterpolation=Ie,ki.prototype.InterpolantFactoryMethodLinear=void 0,ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};Ai.prototype.ValueTypeName=`color`;var ji=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};ji.prototype.ValueTypeName=`number`;var Mi=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)at.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ni=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Mi(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName=`quaternion`,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Oi{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName=`string`,Pi.prototype.ValueBufferType=Array,Pi.prototype.DefaultInterpolation=Ie,Pi.prototype.InterpolantFactoryMethodLinear=void 0,Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};Fi.prototype.ValueTypeName=`vector`;var Ii=class extends Wr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Li=class extends Jr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ri=`\\[\\]\\.:\\/`,zi=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bi=`[^\\[\\]\\.:\\/]`,Vi=`[^`+Ri.replace(`\\.`,``)+`]`,Hi=`((?:WC+[\\/:])*)`.replace(`WC`,Bi),Ui=`(WCOD+)?`.replace(`WCOD`,Vi),Wi=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bi),Gi=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bi),Ki=RegExp(`^`+Hi+Ui+Wi+Gi+`$`),qi=[`material`,`materials`,`bones`,`map`],Ji=class{constructor(e,t,n){let r=n||Yi.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yi=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zi,``)}static parseTrackName(e){let t=Ki.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qi.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yi.Composite=Ji,Yi.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yi.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yi.prototype.GetterByBindingType=[Yi.prototype._getValue_direct,Yi.prototype._getValue_array,Yi.prototype._getValue_arrayElement,Yi.prototype._getValue_toArray],Yi.prototype.SetterByBindingTypeAndVersioning=[[Yi.prototype._setValue_direct,Yi.prototype._setValue_direct_setNeedsUpdate,Yi.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yi.prototype._setValue_array,Yi.prototype._setValue_array_setNeedsUpdate,Yi.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yi.prototype._setValue_arrayElement,Yi.prototype._setValue_arrayElement_setNeedsUpdate,Yi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yi.prototype._setValue_fromArray,Yi.prototype._setValue_fromArray_setNeedsUpdate,Yi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Xi(e,t,n,r){let i=Zi(r);switch(n){case ae:return e*t;case le:return e*t/i.components*i.byteLength;case P:return e*t/i.components*i.byteLength;case ue:return e*t*2/i.components*i.byteLength;case de:return e*t*2/i.components*i.byteLength;case oe:return e*t*3/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case fe:return e*t*4/i.components*i.byteLength;case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:case ge:return Math.max(e,16)*Math.max(t,8)/4;case L:case R:return Math.max(e,8)*Math.max(t,8)/2;case z:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case B:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case V:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case H:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case U:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zi(e){switch(e){case E:case D:return{byteLength:1,components:1};case k:case O:case re:return{byteLength:2,components:1};case A:case j:return{byteLength:2,components:4};case te:case ee:case ne:return{byteLength:4,components:1};case ie:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`177`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`177`);function Qi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $i(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new tr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new tr(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},ea={basic:{uniforms:Lr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:Lr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new tr(0)}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:Lr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new tr(0)},specular:{value:new tr(1118481)},shininess:{value:30}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:Lr([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new tr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:Lr([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new tr(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:Lr([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:Lr([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:Lr([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:Lr([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:Lr([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:Lr([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distanceRGBA:{uniforms:Lr([Z.common,Z.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distanceRGBA_vert,fragmentShader:X.distanceRGBA_frag},shadow:{uniforms:Lr([Z.lights,Z.fog,{color:{value:new tr(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};ea.physical={uniforms:Lr([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new tr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new tr(0)},specularColor:{value:new tr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var ta={r:0,b:0,g:0},na=new yn,ra=new ln;function ia(e,t,n,r,i,a,o){let s=new tr(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Mr(new Fr(1,1,1),new Ur({name:`BackgroundCubeMaterial`,uniforms:Ir(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),na.copy(n.backgroundRotation),na.x*=-1,na.y*=-1,na.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(na.y*=-1,na.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ra.makeRotationFromEuler(na)),u.material.toneMapped=Y.getTransfer(r.colorSpace)!==Ge,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Mr(new yi(2,2),new Ur({name:`BackgroundMaterial`,uniforms:Ir(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Y.getTransfer(r.colorSpace)!==Ge,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(ta,zr(e)),r.buffers.color.setClear(ta.r,ta.g,ta.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function aa(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function oa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function sa(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function ca(e){let t=this,n=null,r=0,i=!1,a=!1,o=new si,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function la(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new $r(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var ua=4,da=[.125,.215,.35,.446,.526,.582],fa=20,pa=new Ii,ma=new tr,ha=null,ga=0,_a=0,va=!1,ya=(1+Math.sqrt(5))/2,ba=1/ya,xa=[new q(-ya,ba,0),new q(ya,ba,0),new q(-ba,0,ya),new q(ba,0,ya),new q(0,ya,-ba),new q(0,ya,ba),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],Sa=new q,Ca=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Sa}=i;ha=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha,ga,_a),this._renderer.xr.enabled=va,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:C,minFilter:C,generateMipmaps:!1,type:re,format:N,colorSpace:Ue,depthBuffer:!1},r=Ta(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wa(r)),this._blurMaterial=Da(r,e,t)}return r}_compileMaterial(e){let t=new Mr(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,r,i){let a=new Jr(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ma),c.toneMapping=0,c.autoClear=!1;let d=new ar({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new Mr(new Fr,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(ma),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ea(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Mr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ea(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=xa[(r-t-1)%xa.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Mr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):fa;m>fa&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fa}`);let h=[],g=0;for(let e=0;e<fa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ea(t,3*v*(r>_-ua?r-_+ua:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,pa)}};function wa(e){let t=[],n=[],r=[],i=e,a=e-ua+1+da.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-ua?s=da[o-e+ua-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new br;h.setAttribute(`position`,new lr(f,3)),h.setAttribute(`uv`,new lr(p,2)),h.setAttribute(`faceIndex`,new lr(m,1)),t.push(h),i>ua&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ta(e,t,n){let r=new Mt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ea(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Da(e,t,n){let r=new Float32Array(fa),i=new q(0,1,0);return new Ur({name:`SphericalGaussianBlur`,defines:{n:fa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oa(){return new Ur({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ka(){return new Ur({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ja(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Ca(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Ca(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Ma(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Na(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(lt(n)?dr:ur)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Pa(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fa(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ia(e,t,n){let r=new WeakMap,i=new At;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Nt(h,p,m,u);g.type=ne,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new it(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function La(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Ra=new kt,za=new vi(1,1),Ba=new Nt,Va=new Pt,Ha=new Qr,Ua=[],Wa=[],Ga=new Float32Array(16),Ka=new Float32Array(9),qa=new Float32Array(4);function Ja(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ua[i];if(a===void 0&&(a=new Float32Array(i),Ua[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ya(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Xa(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Za(e,t){let n=Wa[t];n===void 0&&(n=new Int32Array(t),Wa[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Qa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $a(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ya(n,t))return;e.uniform2fv(this.addr,t),Xa(n,t)}}function eo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ya(n,t))return;e.uniform3fv(this.addr,t),Xa(n,t)}}function to(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ya(n,t))return;e.uniform4fv(this.addr,t),Xa(n,t)}}function no(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ya(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xa(n,t)}else{if(Ya(n,r))return;qa.set(r),e.uniformMatrix2fv(this.addr,!1,qa),Xa(n,r)}}function ro(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ya(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xa(n,t)}else{if(Ya(n,r))return;Ka.set(r),e.uniformMatrix3fv(this.addr,!1,Ka),Xa(n,r)}}function io(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ya(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xa(n,t)}else{if(Ya(n,r))return;Ga.set(r),e.uniformMatrix4fv(this.addr,!1,Ga),Xa(n,r)}}function ao(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ya(n,t))return;e.uniform2iv(this.addr,t),Xa(n,t)}}function so(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ya(n,t))return;e.uniform3iv(this.addr,t),Xa(n,t)}}function co(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ya(n,t))return;e.uniform4iv(this.addr,t),Xa(n,t)}}function lo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ya(n,t))return;e.uniform2uiv(this.addr,t),Xa(n,t)}}function fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ya(n,t))return;e.uniform3uiv(this.addr,t),Xa(n,t)}}function po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ya(n,t))return;e.uniform4uiv(this.addr,t),Xa(n,t)}}function mo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(za.compareFunction=515,a=za):a=Ra,n.setTexture2D(t||a,i)}function ho(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Va,i)}function go(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ha,i)}function _o(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ba,i)}function vo(e){switch(e){case 5126:return Qa;case 35664:return $a;case 35665:return eo;case 35666:return to;case 35674:return no;case 35675:return ro;case 35676:return io;case 5124:case 35670:return ao;case 35667:case 35671:return oo;case 35668:case 35672:return so;case 35669:case 35673:return co;case 5125:return lo;case 36294:return uo;case 36295:return fo;case 36296:return po;case 35678:case 36198:case 36298:case 36306:case 35682:return mo;case 35679:case 36299:case 36307:return ho;case 35680:case 36300:case 36308:case 36293:return go;case 36289:case 36303:case 36311:case 36292:return _o}}function yo(e,t){e.uniform1fv(this.addr,t)}function bo(e,t){let n=Ja(t,this.size,2);e.uniform2fv(this.addr,n)}function xo(e,t){let n=Ja(t,this.size,3);e.uniform3fv(this.addr,n)}function So(e,t){let n=Ja(t,this.size,4);e.uniform4fv(this.addr,n)}function Co(e,t){let n=Ja(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wo(e,t){let n=Ja(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function To(e,t){let n=Ja(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Eo(e,t){e.uniform1iv(this.addr,t)}function Do(e,t){e.uniform2iv(this.addr,t)}function Oo(e,t){e.uniform3iv(this.addr,t)}function ko(e,t){e.uniform4iv(this.addr,t)}function Ao(e,t){e.uniform1uiv(this.addr,t)}function jo(e,t){e.uniform2uiv(this.addr,t)}function Mo(e,t){e.uniform3uiv(this.addr,t)}function No(e,t){e.uniform4uiv(this.addr,t)}function Po(e,t,n){let r=this.cache,i=t.length,a=Za(n,i);Ya(r,a)||(e.uniform1iv(this.addr,a),Xa(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Ra,a[e])}function Fo(e,t,n){let r=this.cache,i=t.length,a=Za(n,i);Ya(r,a)||(e.uniform1iv(this.addr,a),Xa(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Va,a[e])}function Io(e,t,n){let r=this.cache,i=t.length,a=Za(n,i);Ya(r,a)||(e.uniform1iv(this.addr,a),Xa(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ha,a[e])}function Lo(e,t,n){let r=this.cache,i=t.length,a=Za(n,i);Ya(r,a)||(e.uniform1iv(this.addr,a),Xa(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ba,a[e])}function Ro(e){switch(e){case 5126:return yo;case 35664:return bo;case 35665:return xo;case 35666:return So;case 35674:return Co;case 35675:return wo;case 35676:return To;case 5124:case 35670:return Eo;case 35667:case 35671:return Do;case 35668:case 35672:return Oo;case 35669:case 35673:return ko;case 5125:return Ao;case 36294:return jo;case 36295:return Mo;case 36296:return No;case 35678:case 36198:case 36298:case 36306:case 35682:return Po;case 35679:case 36299:case 36307:return Fo;case 35680:case 36300:case 36308:case 36293:return Io;case 36289:case 36303:case 36311:case 36292:return Lo}}var zo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vo(t.type)}},Bo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ro(t.type)}},Vo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function Uo(e,t){e.seq.push(t),e.map[t.id]=t}function Wo(e,t,n){let r=e.name,i=r.length;for(Ho.lastIndex=0;;){let a=Ho.exec(r),o=Ho.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Uo(n,l===void 0?new zo(s,e,t):new Bo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Vo(s),Uo(n,e)),n=e}}}var Go=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Wo(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ko(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var qo=37297,Jo=0;function Yo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Xo=new J;function Zo(e){Y._getMatrix(Xo,Y.workingColorSpace,e);let t=`mat3( ${Xo.elements.map(e=>e.toFixed(4))} )`;switch(Y.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Qo(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Yo(e.getShaderSource(t),r)}return i}function $o(e,t){let n=Zo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function es(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ts=new q;function ns(){return Y.getLuminanceCoefficients(ts),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ts.x.toFixed(4)}, ${ts.y.toFixed(4)}, ${ts.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function rs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(os).join(`
`)}function is(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function as(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function os(e){return e!==``}function ss(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ls=/^[ \t]*#include +<([\w\d./]+)>/gm;function us(e){return e.replace(ls,ds)}var Q=new Map;function ds(e,t){let n=X[t];if(n===void 0){let e=Q.get(t);if(e!==void 0)n=X[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return us(n)}var fs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ps(e){return e.replace(fs,ms)}function ms(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function hs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function gs(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function _s(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function vs(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function ys(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function bs(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function xs(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gs(n),l=_s(n),u=vs(n),d=ys(n),f=bs(n),p=rs(n),m=is(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(os).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(os).join(`
`),_.length>0&&(_+=`
`)):(g=[hs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(os).join(`
`),_=[hs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:es(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,$o(`linearToOutputTexel`,n.outputColorSpace),ns(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(os).join(`
`)),o=us(o),o=ss(o,n),o=cs(o,n),s=us(s),s=ss(s,n),s=cs(s,n),o=ps(o),s=ps(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ko(i,i.VERTEX_SHADER,y),S=Ko(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Qo(i,x,`vertex`),r=Qo(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Go(i,h),T=as(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,qo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ss=0,Cs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ws(e),t.set(e,n)),n}},ws=class{constructor(e){this.id=Ss++,this.code=e,this.usedTimes=0}};function Ts(e,t,n,r,i,a,o){let s=new bn,c=new Cs,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=ea[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),ee=c.getFragmentShaderID(a);let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=_.isInstancedMesh===!0,A=_.isBatchedMesh===!0,j=!!a.map,M=!!a.matcap,ie=!!x,ae=!!a.aoMap,oe=!!a.lightMap,N=!!a.bumpMap,se=!!a.normalMap,ce=!!a.displacementMap,le=!!a.emissiveMap,P=!!a.metalnessMap,ue=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,pe=a.dispersion>0,me=a.iridescence>0,F=a.sheen>0,I=a.transmission>0,L=de&&!!a.anisotropyMap,he=fe&&!!a.clearcoatMap,R=fe&&!!a.clearcoatNormalMap,ge=fe&&!!a.clearcoatRoughnessMap,z=me&&!!a.iridescenceMap,_e=me&&!!a.iridescenceThicknessMap,B=F&&!!a.sheenColorMap,V=F&&!!a.sheenRoughnessMap,ve=!!a.specularMap,ye=!!a.specularColorMap,H=!!a.specularIntensityMap,be=I&&!!a.transmissionMap,xe=I&&!!a.thicknessMap,Se=!!a.gradientMap,Ce=!!a.alphaMap,we=a.alphaTest>0,Te=!!a.alphaHash,Ee=!!a.extensions,De=0;a.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(De=e.toneMapping);let U={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:A,batchingColor:A&&_._colorsTexture!==null,instancing:re,instancingColor:re&&_.instanceColor!==null,instancingMorph:re&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ue,alphaToCoverage:!!a.alphaToCoverage,map:j,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:N,normalMap:se,displacementMap:f&&ce,emissiveMap:le,normalMapObjectSpace:se&&a.normalMapType===1,normalMapTangentSpace:se&&a.normalMapType===0,metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:L,clearcoat:fe,clearcoatMap:he,clearcoatNormalMap:R,clearcoatRoughnessMap:ge,dispersion:pe,iridescence:me,iridescenceMap:z,iridescenceThicknessMap:_e,sheen:F,sheenColorMap:B,sheenRoughnessMap:V,specularMap:ve,specularColorMap:ye,specularIntensityMap:H,transmission:I,transmissionMap:be,thicknessMap:xe,gradientMap:Se,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ce,alphaTest:we,alphaHash:Te,combine:a.combine,mapUv:j&&h(a.map.channel),aoMapUv:ae&&h(a.aoMap.channel),lightMapUv:oe&&h(a.lightMap.channel),bumpMapUv:N&&h(a.bumpMap.channel),normalMapUv:se&&h(a.normalMap.channel),displacementMapUv:ce&&h(a.displacementMap.channel),emissiveMapUv:le&&h(a.emissiveMap.channel),metalnessMapUv:P&&h(a.metalnessMap.channel),roughnessMapUv:ue&&h(a.roughnessMap.channel),anisotropyMapUv:L&&h(a.anisotropyMap.channel),clearcoatMapUv:he&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:R&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:B&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:V&&h(a.sheenRoughnessMap.channel),specularMapUv:ve&&h(a.specularMap.channel),specularColorMapUv:ye&&h(a.specularColorMap.channel),specularIntensityMapUv:H&&h(a.specularIntensityMap.channel),transmissionMapUv:be&&h(a.transmissionMap.channel),thicknessMapUv:xe&&h(a.thicknessMap.channel),alphaMapUv:Ce&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(se||de),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(j||Ce),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ne,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:j&&a.map.isVideoTexture===!0&&Y.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&a.emissiveMap.isVideoTexture===!0&&Y.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ee&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ee&&a.extensions.multiDraw===!0||A)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=ea[t];n=Br.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new xs(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Es(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ds(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Os(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ks(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ds),r.length>1&&r.sort(t||Os),i.length>1&&i.sort(t||Os)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function As(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ks,e.set(t,[i])):n>=r.length?(i=new ks,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function js(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new q,color:new tr};break;case`SpotLight`:n={position:new q,direction:new q,color:new tr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new tr,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new tr,groundColor:new tr};break;case`RectAreaLight`:n={color:new tr,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Ms(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ns=0;function Ps(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fs(e){let t=new js,n=Ms(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new ln,o=new ln;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Ps);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Ns++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Is(e){let t=new Fs(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Ls(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Is(e),t.set(n,[a])):r>=i.length?(a=new Is(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rs=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zs=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bs(e,t,n){let r=new ui,i=new it,a=new it,o=new At,s=new bi({depthPacking:G}),c=new xi,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Rs,fragmentShader:zs}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new br;m.setAttribute(`position`,new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Mr(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:b,magFilter:b};d.map!==null&&d.map.dispose(),d.map=new Mt(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),x(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Mt(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var Vs={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Hs(e,t){function n(){let t=!1,n=new At,r=null,i=new At(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):P(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Vs[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):P(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new tr(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,A=e.getParameter(e.VERSION);A.indexOf(`WebGL`)===-1?A.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(A)[1]),ne=re>=1);let j=null,M={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new At().fromArray(ie),N=new At().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),L(!1),he(1),le(e.CULL_FACE),F(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function P(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return m!==t&&(e.useProgram(t),m=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function F(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(P(e.BLEND),h=!1);return}if(h===!1&&(le(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(pe[n],pe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function I(t,n){t.side===2?P(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),L(r),t.blending===1&&t.transparent===!1?F(0):F(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):P(e.SAMPLE_ALPHA_TO_COVERAGE)}function L(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function he(t){t===0?P(e.CULL_FACE):(le(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function R(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function ge(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(k!==n||ee!==r)&&(e.polygonOffset(n,r),k=n,ee=r)):P(e.POLYGON_OFFSET_FILL)}function z(t){t?le(e.SCISSOR_TEST):P(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+te-1),j!==t&&(e.activeTexture(t),j=t)}function B(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+te-1:j);let i=M[r];i===void 0&&(i={type:void 0,texture:void 0},M[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function V(){let t=M[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function H(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function U(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Oe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ke(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},j=null,M={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new tr(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:P,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:F,setMaterial:I,setFlipSided:L,setCullFace:he,setLineWidth:R,setPolygonOffset:ge,setScissorTest:z,activeTexture:_e,bindTexture:B,unbindTexture:V,compressedTexImage2D:ve,compressedTexImage3D:ye,texImage2D:Te,texImage3D:Ee,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:Ce,texStorage3D:we,texSubImage2D:H,texSubImage3D:be,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:De,viewport:U,reset:Ae}}function Us(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):ut(`canvas`)}function h(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?We:Y.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t),t.isVideoTexture&&u.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),j(t)}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&A(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function A(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function j(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let M=0;function ie(){M=0}function ae(){let e=M;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),M+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&Ce(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{L(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){L(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){L(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[_]:e.REPEAT,[v]:e.CLAMP_TO_EDGE,[y]:e.MIRRORED_REPEAT},de={[b]:e.NEAREST,[x]:e.NEAREST_MIPMAP_NEAREST,[S]:e.NEAREST_MIPMAP_LINEAR,[C]:e.LINEAR,[w]:e.LINEAR_MIPMAP_NEAREST,[T]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function F(e,t,n){return Math.floor(Math.floor(e/n)/t)}function I(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=F(n.start,r.width,4),c=F(t.start,r.width,4);n.start<=i+1&&a===c&&F(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function L(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=me(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=we(o,p);let m=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,m,_,o.colorSpace,o.isVideoTexture);pe(c,o);let y,b=o.mipmaps,x=o.isVideoTexture!==!0,S=d.__version===void 0||l===!0,C=u.dataReady,w=ee(o,p);if(o.isDepthTexture)v=k(o.format===ce,o.type),S&&(x?n.texStorage2D(e.TEXTURE_2D,1,v,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,v,p.width,p.height,0,m,_,null));else if(o.isDataTexture){if(b.length>0){x&&S&&n.texStorage2D(e.TEXTURE_2D,w,v,b[0].width,b[0].height);for(let t=0,r=b.length;t<r;t++)y=b[t],x?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,_,y.data):n.texImage2D(e.TEXTURE_2D,t,v,y.width,y.height,0,m,_,y.data);o.generateMipmaps=!1}else x?(S&&n.texStorage2D(e.TEXTURE_2D,w,v,p.width,p.height),C&&I(o,p,m,_)):n.texImage2D(e.TEXTURE_2D,0,v,p.width,p.height,0,m,_,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){x&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,v,b[0].width,b[0].height,p.depth);for(let t=0,r=b.length;t<r;t++)if(y=b[t],o.format!==1023){if(m!==null){if(x){if(C){if(o.layerUpdates.size>0){let r=Xi(y.width,y.height,o.format,o.type);for(let i of o.layerUpdates){let a=y.data.subarray(i*r/y.data.BYTES_PER_ELEMENT,(i+1)*r/y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,y.width,y.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,p.depth,m,y.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,v,y.width,y.height,p.depth,0,y.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else x?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,p.depth,m,_,y.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,v,y.width,y.height,p.depth,0,m,_,y.data)}else{x&&S&&n.texStorage2D(e.TEXTURE_2D,w,v,b[0].width,b[0].height);for(let t=0,r=b.length;t<r;t++)y=b[t],o.format===1023?x?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,_,y.data):n.texImage2D(e.TEXTURE_2D,t,v,y.width,y.height,0,m,_,y.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,y.data):n.compressedTexImage2D(e.TEXTURE_2D,t,v,y.width,y.height,0,y.data)}}else if(o.isDataArrayTexture){if(x){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,v,p.width,p.height,p.depth),C){if(o.layerUpdates.size>0){let t=Xi(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,_,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,_,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,v,p.width,p.height,p.depth,0,m,_,p.data)}else if(o.isData3DTexture)x?(S&&n.texStorage3D(e.TEXTURE_3D,w,v,p.width,p.height,p.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,_,p.data)):n.texImage3D(e.TEXTURE_3D,0,v,p.width,p.height,p.depth,0,m,_,p.data);else if(o.isFramebufferTexture){if(S){if(x)n.texStorage2D(e.TEXTURE_2D,w,v,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<w;i++)n.texImage2D(e.TEXTURE_2D,i,v,t,r,0,m,_,null),t>>=1,r>>=1}}}else if(b.length>0){if(x&&S){let t=Te(b[0]);n.texStorage2D(e.TEXTURE_2D,w,v,t.width,t.height)}for(let t=0,r=b.length;t<r;t++)y=b[t],x?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,_,y):n.texImage2D(e.TEXTURE_2D,t,v,m,_,y);o.generateMipmaps=!1}else if(x){if(S){let t=Te(p);n.texStorage2D(e.TEXTURE_2D,w,v,t.width,t.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,_,p)}else n.texImage2D(e.TEXTURE_2D,0,v,m,_,p);g(o)&&E(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=me(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=we(o,m[e]);let _=m[0],v=a.convert(o.format,o.colorSpace),y=a.convert(o.type),b=O(o.internalFormat,v,y,o.colorSpace),x=o.isVideoTexture!==!0,S=u.__version===void 0||c===!0,C=l.dataReady,w=ee(o,_);pe(e.TEXTURE_CUBE_MAP,o);let T;if(f){x&&S&&n.texStorage2D(e.TEXTURE_CUBE_MAP,w,b,_.width,_.height);for(let t=0;t<6;t++){T=m[t].mipmaps;for(let r=0;r<T.length;r++){let i=T[r];o.format===1023?x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,v,y,i.data):v===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?C&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,i.data)}}}else{if(T=o.mipmaps,x&&S){T.length>0&&w++;let t=Te(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,w,b,t.width,t.height)}for(let t=0;t<6;t++)if(p){x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,v,y,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,m[t].width,m[t].height,0,v,y,m[t].data);for(let r=0;r<T.length;r++){let i=T[r].image[t].image;x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,i.width,i.height,0,v,y,i.data)}}else{x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,v,y,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,v,y,m[t]);for(let r=0;r<T.length;r++){let i=T[r];x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,v,y,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,v,y,i.image[t])}}}g(o)&&E(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function R(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Se(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,xe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=xe(n);Se(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.colorSpace),d=xe(n);r&&Se(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):Se(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function z(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,(!a.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),N(i.depthTexture,0);let o=a.__webglTexture,c=xe(i);if(i.depthTexture.format===1026)Se(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)Se(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function _e(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?z(i.__webglFramebuffer[0],t):z(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function B(t,n,i){let a=r.get(t);n!==void 0&&R(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&_e(t)}function V(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ne);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Se(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=xe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)R(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else R(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),pe(e.TEXTURE_2D,a),R(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&E(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)R(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else R(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&E(r),n.unbindTexture()}t.depthBuffer&&_e(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=D(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),E(t),n.unbindTexture()}}}let ye=[],H=[];function be(t){if(t.samples>0){if(Se(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,H.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ye.push(l),H.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,H)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function xe(e){return Math.min(i.maxSamples,e.samples)}function Se(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ce(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function we(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Y.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.setTexture2D=N,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=P,this.rebindTextures=B,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=R,this.useMultisampledRTT=Se}function Ws(e,t){function n(n,r=``){let i,a=Y.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Gs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ks=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new kt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ur({vertexShader:Gs,fragmentShader:Ks,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mr(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Js=class extends Ye{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new qs,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new it,x=null,S=new Jr;S.viewport=new At;let C=new Jr;C.viewport=new At;let w=[S,C],T=new Li,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new ni,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new ni,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new ni,v[e]=t),t.getHandSpace()};function k(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,k),r.removeEventListener(`selectstart`,k),r.removeEventListener(`selectend`,k),r.removeEventListener(`squeeze`,k),r.removeEventListener(`squeezestart`,k),r.removeEventListener(`squeezeend`,k),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}D=null,O=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,k),r.addEventListener(`selectstart`,k),r.addEventListener(`selectend`,k),r.addEventListener(`squeeze`,k),r.addEventListener(`squeezestart`,k),r.addEventListener(`squeezeend`,k),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,ne),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<`u`&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?ce:se,a=h.stencil?M:te);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Mt(d.textureWidth,d.textureHeight,{format:N,type:E,depthTexture:new vi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Mt(f.framebufferWidth,f.framebufferHeight,{format:N,type:E,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let re=new q,A=new q;function j(e,t,n){re.setFromMatrixPosition(t.matrixWorld),A.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(A),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(D!==T.near||O!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,O=T.far),S.layers.mask=e.layers.mask|2,C.layers.mask=e.layers.mask|4,T.layers.mask=S.layers.mask|C.layers.mask;let i=e.parent,a=T.cameras;ie(T,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?j(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),ae(e,T,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Qe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let oe=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new Jr,o.layers.enable(r),o.viewport=new At,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&u){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new Qi;P.setAnimationLoop(le),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Ys=new yn,Xs=new ln;function Zs(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,zr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ys.copy(o),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),e.envMapRotation.value.setFromMatrix4(Xs.makeRotationFromEuler(Ys)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Qs(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var $s=class{constructor(e={}){let{canvas:t=dt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=He;let x=0,S=0,C=null,w=-1,D=null,O=new At,k=new At,ee=null,te=new tr(0),ne=0,A=t.width,j=t.height,M=1,ie=null,ae=null,oe=new At(0,0,A,j),N=new At(0,0,A,j),se=!1,ce=new ui,le=!1,P=!1,ue=new ln,de=new ln,fe=new q,pe=new At,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function I(){return C===null?M:1}let L=n;function he(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r177`),t.addEventListener(`webglcontextlost`,Ie,!1),t.addEventListener(`webglcontextrestored`,Le,!1),t.addEventListener(`webglcontextcreationerror`,Re,!1),L===null){let t=`webgl2`;if(L=he(t,e),L===null)throw he(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let R,ge,z,_e,B,V,ve,ye,H,be,xe,Se,Ce,we,Te,Ee,De,U,Oe,ke,Ae,je,Me,Ne;function Pe(){R=new Ma(L),R.init(),je=new Ws(L,R),ge=new sa(L,R,e,je),z=new Hs(L,R),ge.reverseDepthBuffer&&d&&z.buffers.depth.setReversed(!0),_e=new Fa(L),B=new Es,V=new Us(L,R,z,B,ge,je,_e),ve=new la(y),ye=new ja(y),H=new $i(L),Me=new aa(L,H),be=new Na(L,H,_e,Me),xe=new La(L,be,H,_e),Oe=new Ia(L,ge,V),Ee=new ca(B),Se=new Ts(y,ve,ye,R,ge,Me,Ee),Ce=new Zs(y,B),we=new As,Te=new Ls(R),U=new ia(y,ve,ye,z,xe,f,s),De=new Bs(y,xe,ge),Ne=new Qs(L,_e,ge,z),ke=new oa(L,R,_e),Ae=new Pa(L,R,_e),_e.programs=Se.programs,y.capabilities=ge,y.extensions=R,y.properties=B,y.renderLists=we,y.shadowMap=De,y.state=z,y.info=_e}Pe();let Fe=new Js(y,L);this.xr=Fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=R.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=R.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){if(Fe.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),z.viewport(O.copy(oe).multiplyScalar(M).round())},this.getScissor=function(e){return e.copy(N)},this.setScissor=function(e,t,n,r){e.isVector4?N.set(e.x,e.y,e.z,e.w):N.set(e,t,n,r),z.scissor(k.copy(N).multiplyScalar(M).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(e){z.setScissorTest(se=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=U.getClearColor(),r=U.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,L.clearBufferuiv(L.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,L.clearBufferiv(L.COLOR,0,m))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ie,!1),t.removeEventListener(`webglcontextrestored`,Le,!1),t.removeEventListener(`webglcontextcreationerror`,Re,!1),U.dispose(),we.dispose(),Te.dispose(),B.dispose(),ve.dispose(),ye.dispose(),xe.dispose(),Me.dispose(),Ne.dispose(),Se.dispose(),Fe.dispose(),Fe.removeEventListener(`sessionstart`,Ge),Fe.removeEventListener(`sessionend`,Ke),qe.stop()};function Ie(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function Le(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=_e.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Pe(),_e.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function Re(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ze(e){let t=e.target;t.removeEventListener(`dispose`,ze),Be(t)}function Be(e){W(e),B.remove(e)}function W(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=me);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=tt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Me.setup(i,r,s,n,c);let h,g=ke;if(c!==null&&(h=H.get(c),g=Ae,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*I()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*I()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)pt(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(R.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?H.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ve(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,$e(e,t,n),e.side=0,e.needsUpdate=!0,$e(e,t,n),e.side=2):$e(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=Te.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ve(a,n,e),r.add(a)}else Ve(t,n,e),r.add(t)}}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}R.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let G=null;function We(e){G&&G(e)}function Ge(){qe.stop()}function Ke(){qe.start()}let qe=new Qi;qe.setAnimationLoop(We),typeof self<`u`&&qe.setContext(self),this.setAnimationLoop=function(e){G=e,Fe.setAnimationLoop(e),e===null?qe.stop():qe.start()},Fe.addEventListener(`sessionstart`,Ge),Fe.addEventListener(`sessionend`,Ke),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(t),t=Fe.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=Te.get(e,v.length),g.init(t),v.push(g),de.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ce.setFromProjectionMatrix(de),P=this.localClippingEnabled,le=Ee.init(this.clippingPlanes,P),h=we.get(e,_.length),h.init(),_.push(h),Fe.enabled===!0&&Fe.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&Je(e,t,-1/0,y.sortObjects)}Je(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(ie,ae),F=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,F&&U.addToRenderList(h,e),this.info.render.frame++,le===!0&&Ee.beginShadows();let n=g.state.shadowsArray;De.render(n,e,t),le===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Xe(r,i,e,a)}F&&U.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ye(h,e,r,r.viewport)}}else i.length>0&&Xe(r,i,e,t),F&&U.render(e),Ye(h,e,t);C!==null&&S===0&&(V.updateMultisampleRenderTarget(C),V.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),Me.resetDefaultState(),w=-1,D=null,v.pop(),v.length>0?(g=v[v.length-1],le===!0&&Ee.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function Je(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ce.intersectsSprite(e)){r&&pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);let t=xe.update(e),i=e.material;i.visible&&h.push(e,t,i,n,pe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ce.intersectsObject(e))){let t=xe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),pe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),pe.copy(e.boundingSphere.center)),pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,pe.z,o)}}else i.visible&&h.push(e,t,i,n,pe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Je(i[e],t,n,r)}function Ye(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),le===!0&&Ee.setGlobalState(y.clippingPlanes,n),r&&z.viewport(O.copy(r)),i.length>0&&Ze(i,t,n),a.length>0&&Ze(a,t,n),o.length>0&&Ze(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Xe(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new Mt(1,1,{generateMipmaps:!0,type:R.has(`EXT_color_buffer_half_float`)||R.has(`EXT_color_buffer_float`)?re:E,minFilter:T,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Y.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget();y.setRenderTarget(a),y.getClearColor(te),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),F&&U.render(n);let c=y.toneMapping;y.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),le===!0&&Ee.setGlobalState(y.clippingPlanes,r),Ze(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),R.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Qe(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}y.setRenderTarget(s),y.setClearColor(te,ne),l!==void 0&&(r.viewport=l),y.toneMapping=c}function Ze(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Qe(o,t,n,s,l,c)}}function Qe(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function $e(e,t,n){t.isScene!==!0&&(t=me);let r=B.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ye:ve).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ze),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return et(e,s),u}else s.uniforms=Se.getUniforms(e),e.onBeforeCompile(s,y),u=Se.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ee.uniform),et(e,s),r.needsLights=rt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function K(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Go.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function et(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function tt(e,t,n,r,i){t.isScene!==!0&&(t=me),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ue,c=(r.isMeshStandardMaterial?ye:ve).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=B.get(r),b=g.state.lights;if(le===!0&&(P===!0||e!==D)){let t=e===D&&r.id===w;Ee.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ee.numPlanes||v.numIntersection!==Ee.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=$e(r,t,i));let T=!1,E=!1,O=!1,k=S.getUniforms(),ee=v.uniforms;if(z.useProgram(S.program)&&(T=!0,E=!0,O=!0),r.id!==w&&(w=r.id,E=!0),T||D!==e){z.buffers.depth.getReversed()?(ue.copy(e.projectionMatrix),ht(ue),gt(ue),k.setValue(L,`projectionMatrix`,ue)):k.setValue(L,`projectionMatrix`,e.projectionMatrix),k.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(L,fe.setFromMatrixPosition(e.matrixWorld)),ge.logarithmicDepthBuffer&&k.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,E=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(L,i,`bindMatrix`),k.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(L,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(k.setOptional(L,i,`batchingTexture`),k.setValue(L,`batchingTexture`,i._matricesTexture,V),k.setOptional(L,i,`batchingIdTexture`),k.setValue(L,`batchingIdTexture`,i._indirectTexture,V),k.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(L,`batchingColorTexture`,i._colorsTexture,V));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&Oe.update(i,n,S),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(L,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(ee.envMap.value=c,ee.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),E&&(k.setValue(L,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&nt(ee,O),a&&r.fog===!0&&Ce.refreshFogUniforms(ee,a),Ce.refreshMaterialUniforms(ee,r,M,j,g.state.transmissionRenderTarget[e.id]),Go.upload(L,K(v),ee,V)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Go.upload(L,K(v),ee,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(L,`center`,i.center),k.setValue(L,`modelViewMatrix`,i.modelViewMatrix),k.setValue(L,`normalMatrix`,i.normalMatrix),k.setValue(L,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ne.update(n,S),Ne.bind(n,S)}}return S}function nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function rt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let it=L.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=B.get(e);if(s.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(L.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(s.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),ee=e.scissorTest}else O.copy(oe).multiplyScalar(M).floor(),k.copy(N).multiplyScalar(M).floor(),ee=se;if(n!==0&&(i=it),z.bindFramebuffer(L.FRAMEBUFFER,i)&&r&&z.drawBuffers(e,i),z.viewport(O),z.scissor(k),z.setScissorTest(ee),a){let r=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=B.get(e.texture),i=t;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,n,i)}else if(e!==null&&n!==0){let t=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!ge.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ge.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s),L.readPixels(t,n,r,i,je.convert(c),je.convert(l),a))}finally{let e=C===null?null:B.get(C).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!ge.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ge.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,d),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s),L.readPixels(t,n,r,i,je.convert(l),je.convert(u),0);let f=C===null?null:B.get(C).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,f);let p=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mt(L,p,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,d),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.deleteBuffer(d),L.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()};let at=L.createFramebuffer(),ot=L.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(pt(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=je.convert(t.format),_=je.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(L.UNPACK_ROW_LENGTH),b=L.getParameter(L.UNPACK_IMAGE_HEIGHT),x=L.getParameter(L.UNPACK_SKIP_PIXELS),S=L.getParameter(L.UNPACK_SKIP_ROWS),C=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,l),L.pixelStorei(L.UNPACK_SKIP_ROWS,u),L.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);z.bindFramebuffer(L.READ_FRAMEBUFFER,null),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(L.READ_FRAMEBUFFER,at),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,ot);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);z.bindFramebuffer(L.READ_FRAMEBUFFER,null),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(L.UNPACK_ROW_LENGTH,y),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(L.UNPACK_SKIP_PIXELS,x),L.pixelStorei(L.UNPACK_SKIP_ROWS,S),L.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),z.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return pt(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,z.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y._getUnpackColorSpace()}},$=n(),ec=({className:e=``})=>{let t=(0,h.useRef)(null),n=(0,h.useRef)(null),r=()=>document.documentElement.getAttribute(`data-theme`)===`dark`?`dark`:`light`,i=e=>e===`dark`?new tr(1118217):new tr(16777215),a=e=>e===`dark`?new q(240/255,235/255,224/255):new q(28/255,25/255,23/255),o=()=>{if(!t.current)return;let e=t.current,o=window.innerWidth,s=window.innerHeight,c=new Jr(75,o/s,.01,1e3);c.position.set(0,6,5);let l=new ri,u=new $s({canvas:e,antialias:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(o,s);let d=r();u.setClearColor(i(d));let f=.3,p=4e4,m=new Float32Array(p*3),h=new Float32Array(p),g=0,_=0;for(let e=0;e<200;e++)for(let t=0;t<200;t++)m[g]=e*f-200*f/2,m[g+1]=0,m[g+2]=t*f-200*f/2,h[_]=1,g+=3,_++;let v=new br;v.setAttribute(`position`,new lr(m,3)),v.setAttribute(`scale`,new lr(h,1));let y=new Ur({transparent:!0,vertexShader:`
    attribute float scale;
    uniform float uTime;
    void main() {
      vec3 p = position;
      float s = scale;
      p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
      p.x += (sin(p.y + uTime) * 0.5);
      s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
      vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = s * 15.0 * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    void main() {
      gl_FragColor = vec4(uColor, 0.5);
    }
  `,uniforms:{uTime:{value:0},uColor:{value:a(r())}}}),b=new gi(v,y);l.add(b),n.current={scene:l,camera:c,renderer:u,particles:b,particleMaterial:y,animationId:null}},s=()=>{if(!n.current)return;if(document.visibilityState!==`visible`){n.current.animationId=requestAnimationFrame(s);return}let{scene:e,camera:t,renderer:o,particleMaterial:c}=n.current;c.uniforms.uTime.value+=.05;let l=r();c.uniforms.uColor.value=a(l),o.setClearColor(i(l)),t.lookAt(e.position),o.render(e,t),n.current.animationId=requestAnimationFrame(s)},c=()=>{if(!n.current)return;let{camera:e,renderer:t}=n.current,r=window.innerWidth,i=window.innerHeight;e.aspect=r/i,e.updateProjectionMatrix(),t.setSize(r,i)};return(0,h.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;if(o(),e){if(n.current){let{scene:e,camera:t,renderer:r}=n.current;t.lookAt(e.position),r.render(e,t)}}else s();return window.addEventListener(`resize`,c),()=>{if(n.current?.animationId&&cancelAnimationFrame(n.current.animationId),window.removeEventListener(`resize`,c),n.current){let{scene:e,renderer:t,particles:r}=n.current;e.remove(r),r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(e=>e.dispose()):r.material.dispose()),t.dispose()}}},[]),(0,$.jsx)(`canvas`,{ref:t,className:`block ${e}`,style:{width:`100vw`,height:`100vh`,margin:0,overflow:`hidden`}})};function tc(){let e=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let t=e.current;if(!t)return;let n=()=>{let e=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight;t.style.width=e/n*100+`%`};return window.addEventListener(`scroll`,n,{passive:!0}),()=>window.removeEventListener(`scroll`,n)},[]),(0,$.jsx)(`div`,{id:`pb`,ref:e})}function nc(){let[e,t]=(0,h.useState)(`ru`);return(0,$.jsxs)(`button`,{className:`icon-btn lang-toggle`,"data-lang":e,"aria-label":`Язык (в разработке)`,title:`Перевод сайта в разработке`,onClick:()=>t(e=>e===`ru`?`en`:`ru`),children:[(0,$.jsx)(`span`,{className:`lang-label-ru`,children:`RU`}),(0,$.jsx)(`span`,{className:`lang-label-en`,children:`EN`})]})}function rc(){let[e,t]=(0,h.useState)(!1);return(0,$.jsxs)(`button`,{className:`icon-btn share-btn`,"data-copied":e,"aria-label":e?`Ссылка скопирована`:`Поделиться`,onClick:async()=>{let e={title:document.title,url:window.location.href};if(navigator.share){try{await navigator.share(e)}catch{}return}try{await navigator.clipboard.writeText(e.url),t(!0),setTimeout(()=>t(!1),1800)}catch{}},children:[(0,$.jsxs)(`svg`,{className:`icon-share`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`18`,cy:`5`,r:`3`}),(0,$.jsx)(`circle`,{cx:`6`,cy:`12`,r:`3`}),(0,$.jsx)(`circle`,{cx:`18`,cy:`19`,r:`3`}),(0,$.jsx)(`line`,{x1:`8.59`,y1:`13.51`,x2:`15.42`,y2:`17.49`}),(0,$.jsx)(`line`,{x1:`15.41`,y1:`6.51`,x2:`8.59`,y2:`10.49`})]}),(0,$.jsx)(`svg`,{className:`icon-check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})]})}function ic(){return(0,$.jsxs)(`div`,{className:`top-menu`,children:[(0,$.jsx)(m,{}),(0,$.jsx)(nc,{}),(0,$.jsx)(rc,{})]})}var ac=i(s(((e,t)=>{var n=(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(t,n)=>{for(var r in n)e(t,r,{get:n[r],enumerable:!0})},a=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(let c of n(a))!r.call(i,c)&&c!==o&&e(i,c,{get:()=>a[c],enumerable:!(s=t(a,c))||s.enumerable});return i},o=t=>a(e({},`__esModule`,{value:!0}),t),s={};i(s,{BoundingBox:()=>A,Font:()=>qc,Glyph:()=>Ht,Path:()=>se,_parse:()=>G,load:()=>yl,loadSync:()=>bl,parse:()=>vl});var c=0,l=-3;function u(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function d(e,t){this.source=e,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=t,this.destLen=0,this.ltree=new u,this.dtree=new u}var f=new u,p=new u,m=new Uint8Array(30),h=new Uint16Array(30),g=new Uint8Array(30),_=new Uint16Array(30),v=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y=new u,b=new Uint8Array(320);function x(e,t,n,r){var i,a;for(i=0;i<n;++i)e[i]=0;for(i=0;i<30-n;++i)e[i+n]=i/n|0;for(a=r,i=0;i<30;++i)t[i]=a,a+=1<<e[i]}function S(e,t){var n;for(n=0;n<7;++n)e.table[n]=0;for(e.table[7]=24,e.table[8]=152,e.table[9]=112,n=0;n<24;++n)e.trans[n]=256+n;for(n=0;n<144;++n)e.trans[24+n]=n;for(n=0;n<8;++n)e.trans[168+n]=280+n;for(n=0;n<112;++n)e.trans[176+n]=144+n;for(n=0;n<5;++n)t.table[n]=0;for(t.table[5]=32,n=0;n<32;++n)t.trans[n]=n}var C=new Uint16Array(16);function w(e,t,n,r){var i,a;for(i=0;i<16;++i)e.table[i]=0;for(i=0;i<r;++i)e.table[t[n+i]]++;for(e.table[0]=0,a=0,i=0;i<16;++i)C[i]=a,a+=e.table[i];for(i=0;i<r;++i)t[n+i]&&(e.trans[C[t[n+i]]++]=i)}function T(e){e.bitcount--||(e.tag=e.source[e.sourceIndex++],e.bitcount=7);var t=e.tag&1;return e.tag>>>=1,t}function E(e,t,n){if(!t)return n;for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var r=e.tag&65535>>>16-t;return e.tag>>>=t,e.bitcount-=t,r+n}function D(e,t){for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var n=0,r=0,i=0,a=e.tag;do r=2*r+(a&1),a>>>=1,++i,n+=t.table[i],r-=t.table[i];while(r>=0);return e.tag=a,e.bitcount-=i,t.trans[n+r]}function O(e,t,n){var r=E(e,5,257),i=E(e,5,1),a=E(e,4,4),o,s,c;for(o=0;o<19;++o)b[o]=0;for(o=0;o<a;++o){var l=E(e,3,0);b[v[o]]=l}for(w(y,b,0,19),s=0;s<r+i;){var u=D(e,y);switch(u){case 16:var d=b[s-1];for(c=E(e,2,3);c;--c)b[s++]=d;break;case 17:for(c=E(e,3,3);c;--c)b[s++]=0;break;case 18:for(c=E(e,7,11);c;--c)b[s++]=0;break;default:b[s++]=u}}w(t,b,0,r),w(n,b,r,i)}function k(e,t,n){for(;;){var r=D(e,t);if(r===256)return c;if(r<256)e.dest[e.destLen++]=r;else{var i,a,o,s;for(r-=257,i=E(e,m[r],h[r]),a=D(e,n),o=e.destLen-E(e,g[a],_[a]),s=o;s<o+i;++s)e.dest[e.destLen++]=e.dest[s]}}}function ee(e){for(var t,n,r;e.bitcount>8;)e.sourceIndex--,e.bitcount-=8;if(t=e.source[e.sourceIndex+1],t=256*t+e.source[e.sourceIndex],n=e.source[e.sourceIndex+3],n=256*n+e.source[e.sourceIndex+2],t!==(~n&65535))return l;for(e.sourceIndex+=4,r=t;r;--r)e.dest[e.destLen++]=e.source[e.sourceIndex++];return e.bitcount=0,c}function te(e,t){var n=new d(e,t),r,i,a;do{switch(r=T(n),i=E(n,2,0),i){case 0:a=ee(n);break;case 1:a=k(n,f,p);break;case 2:O(n,n.ltree,n.dtree),a=k(n,n.ltree,n.dtree);break;default:a=l}if(a!==c)throw Error(`Data error`)}while(!r);return n.destLen<n.dest.length?typeof n.dest.slice==`function`?n.dest.slice(0,n.destLen):n.dest.subarray(0,n.destLen):n.dest}S(f,p),x(m,h,4,3),x(g,_,2,1),m[28]=0,h[28]=258;function ne(e,t,n,r,i){return(1-i)**3*e+3*(1-i)**2*i*t+3*(1-i)*i**2*n+i**3*r}function re(){this.x1=NaN,this.y1=NaN,this.x2=NaN,this.y2=NaN}re.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},re.prototype.addPoint=function(e,t){typeof e==`number`&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=e,this.x2=e),e<this.x1&&(this.x1=e),e>this.x2&&(this.x2=e)),typeof t==`number`&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=t,this.y2=t),t<this.y1&&(this.y1=t),t>this.y2&&(this.y2=t))},re.prototype.addX=function(e){this.addPoint(e,null)},re.prototype.addY=function(e){this.addPoint(null,e)},re.prototype.addBezier=function(e,t,n,r,i,a,o,s){let c=[e,t],l=[n,r],u=[i,a],d=[o,s];this.addPoint(e,t),this.addPoint(o,s);for(let e=0;e<=1;e++){let t=6*c[e]-12*l[e]+6*u[e],n=-3*c[e]+9*l[e]-9*u[e]+3*d[e],r=3*l[e]-3*c[e];if(n===0){if(t===0)continue;let n=-r/t;0<n&&n<1&&(e===0&&this.addX(ne(c[e],l[e],u[e],d[e],n)),e===1&&this.addY(ne(c[e],l[e],u[e],d[e],n)));continue}let i=t**2-4*r*n;if(i<0)continue;let a=(-t+Math.sqrt(i))/(2*n);0<a&&a<1&&(e===0&&this.addX(ne(c[e],l[e],u[e],d[e],a)),e===1&&this.addY(ne(c[e],l[e],u[e],d[e],a)));let o=(-t-Math.sqrt(i))/(2*n);0<o&&o<1&&(e===0&&this.addX(ne(c[e],l[e],u[e],d[e],o)),e===1&&this.addY(ne(c[e],l[e],u[e],d[e],o)))}},re.prototype.addQuad=function(e,t,n,r,i,a){let o=e+2/3*(n-e),s=t+2/3*(r-t),c=o+1/3*(i-e),l=s+1/3*(a-t);this.addBezier(e,t,o,s,c,l,i,a)};var A=re;function j(){this.commands=[],this.fill=`black`,this.stroke=null,this.strokeWidth=1}var M={};function ie(e,t){let n=Math.floor(e),r=e-n;if(M[t]||(M[t]={}),M[t][r]!==void 0)return n+M[t][r];let i=+(Math.round(r+`e+`+t)+`e-`+t);return M[t][r]=i,n+i}function ae(e){let t=[[]],n=0,r=0;for(let i=0;i<e.length;i+=1){let a=t[t.length-1],o=e[i],s=a[0],c=a[1],l=a[a.length-1],u=e[i+1];a.push(o),o.type===`M`?(n=o.x,r=o.y):o.type===`L`&&(!u||u.type===`Z`)?Math.abs(o.x-n)>1||Math.abs(o.y-r)>1||a.pop():o.type===`L`&&l&&l.x===o.x&&l.y===o.y?a.pop():o.type===`Z`&&(s&&c&&l&&s.type===`M`&&c.type===`L`&&l.type===`L`&&l.x===s.x&&l.y===s.y&&(a.shift(),a[0].type=`M`),i+1<e.length&&t.push([]))}return e=[].concat.apply([],t),e}function oe(e){return Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0,scale:1,x:0,y:0},e)}function N(e){return parseInt(e)===e&&(e={decimalPlaces:e,flipY:!1}),Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0},e)}j.prototype.fromSVG=function(e,t={}){typeof SVGPathElement<`u`&&e instanceof SVGPathElement&&(e=e.getAttribute(`d`)),t=oe(t),this.commands=[];let n=`MmLlQqCcZzHhVv`,r={},i=[``],a=!1;function o(e){return e.filter(e=>e.length).map(e=>{let n=parseFloat(e);return(t.decimalPlaces||t.decimalPlaces===0)&&(n=ie(n,t.decimalPlaces)),n})}function s(e){if(!this.commands.length)return e;let t=this.commands[this.commands.length-1];for(let n=0;n<e.length;n++)e[n]+=t[n&1?`y`:`x`];return e}function c(){if(r.type===void 0)return;let e=r.type.toUpperCase(),t=e!==`Z`&&r.type.toUpperCase()!==r.type,n=o(i);if(i=[``],!n.length&&e!==`Z`)return;t&&e!==`H`&&e!==`V`&&(n=s.apply(this,[n]));let a=this.commands.length&&this.commands[this.commands.length-1].x||0,c=this.commands.length&&this.commands[this.commands.length-1].y||0;switch(e){case`M`:this.moveTo(...n);break;case`L`:this.lineTo(...n);break;case`V`:for(let e=0;e<n.length;e++){let r=0;t&&(r=this.commands.length&&this.commands[this.commands.length-1].y||0),this.lineTo(a,n[e]+r)}break;case`H`:for(let e=0;e<n.length;e++){let r=0;t&&(r=this.commands.length&&this.commands[this.commands.length-1].x||0),this.lineTo(n[e]+r,c)}break;case`C`:this.bezierCurveTo(...n);break;case`Q`:this.quadraticCurveTo(...n);break;case`Z`:(this.commands.length<1||this.commands[this.commands.length-1].type!==`Z`)&&this.close()}if(this.commands.length)for(let e in this.commands[this.commands.length-1])this.commands[this.commands.length-1][e]===void 0&&(this.commands[this.commands.length-1][e]=0)}for(let t=0;t<e.length;t++){let o=e.charAt(t),s=i[i.length-1];if(`0123456789`.indexOf(o)>-1)i[i.length-1]+=o;else if(`-+`.indexOf(o)>-1){if(!r.type&&!this.commands.length&&(r.type=`L`),o===`-`)!r.type||s.indexOf(`-`)>0?a=!0:s.length?i.push(`-`):i[i.length-1]=o;else if(!r.type||s.length>0)a=!0;else continue}else if(n.indexOf(o)>-1)r.type?(c.apply(this),r={type:o}):r.type=o;else if(`SsTtAa`.indexOf(o)>-1)throw Error(`Unsupported path command: `+o+`. Currently supported commands are `+n.split(``).join(`, `)+`.`);else` ,	
\r\f\v`.indexOf(o)>-1?i.push(``):o===`.`?!r.type||s.indexOf(o)>-1?a=!0:i[i.length-1]+=o:a=!0;if(a)throw Error(`Unexpected character: `+o+` at offset `+t)}c.apply(this),t.optimize&&(this.commands=ae(this.commands));let l=t.flipY,u=t.flipYBase;if(l===!0&&t.flipYBase===void 0){let e=this.getBoundingBox();u=e.y1+e.y2}for(let e in this.commands){let n=this.commands[e];for(let r in n)[`x`,`x1`,`x2`].includes(r)?this.commands[e][r]=t.x+n[r]*t.scale:[`y`,`y1`,`y2`].includes(r)&&(this.commands[e][r]=t.y+(l?u-n[r]:n[r])*t.scale)}return this},j.fromSVG=function(e,t){return new j().fromSVG(e,t)},j.prototype.moveTo=function(e,t){this.commands.push({type:`M`,x:e,y:t})},j.prototype.lineTo=function(e,t){this.commands.push({type:`L`,x:e,y:t})},j.prototype.curveTo=j.prototype.bezierCurveTo=function(e,t,n,r,i,a){this.commands.push({type:`C`,x1:e,y1:t,x2:n,y2:r,x:i,y:a})},j.prototype.quadTo=j.prototype.quadraticCurveTo=function(e,t,n,r){this.commands.push({type:`Q`,x1:e,y1:t,x:n,y:r})},j.prototype.close=j.prototype.closePath=function(){this.commands.push({type:`Z`})},j.prototype.extend=function(e){if(e.commands)e=e.commands;else if(e instanceof A){let t=e;this.moveTo(t.x1,t.y1),this.lineTo(t.x2,t.y1),this.lineTo(t.x2,t.y2),this.lineTo(t.x1,t.y2),this.close();return}Array.prototype.push.apply(this.commands,e)},j.prototype.getBoundingBox=function(){let e=new A,t=0,n=0,r=0,i=0;for(let a=0;a<this.commands.length;a++){let o=this.commands[a];switch(o.type){case`M`:e.addPoint(o.x,o.y),t=r=o.x,n=i=o.y;break;case`L`:e.addPoint(o.x,o.y),r=o.x,i=o.y;break;case`Q`:e.addQuad(r,i,o.x1,o.y1,o.x,o.y),r=o.x,i=o.y;break;case`C`:e.addBezier(r,i,o.x1,o.y1,o.x2,o.y2,o.x,o.y),r=o.x,i=o.y;break;case`Z`:r=t,i=n;break;default:throw Error(`Unexpected path command `+o.type)}}return e.isEmpty()&&e.addPoint(0,0),e},j.prototype.draw=function(e){let t=this._layers;if(t&&t.length){for(let n=0;n<t.length;n++)this.draw.call(t[n],e);return}let n=this._image;if(n){e.drawImage(n.image,n.x,n.y,n.width,n.height);return}e.beginPath();for(let t=0;t<this.commands.length;t+=1){let n=this.commands[t];n.type===`M`?e.moveTo(n.x,n.y):n.type===`L`?e.lineTo(n.x,n.y):n.type===`C`?e.bezierCurveTo(n.x1,n.y1,n.x2,n.y2,n.x,n.y):n.type===`Q`?e.quadraticCurveTo(n.x1,n.y1,n.x,n.y):n.type===`Z`&&this.stroke&&this.strokeWidth&&e.closePath()}this.fill&&(e.fillStyle=this.fill,e.fill()),this.stroke&&(e.strokeStyle=this.stroke,e.lineWidth=this.strokeWidth,e.stroke())},j.prototype.toPathData=function(e){e=N(e);function t(t){let n=ie(t,e.decimalPlaces);return Math.round(t)===n?``+n:n.toFixed(e.decimalPlaces)}function n(){let e=``;for(let n=0;n<arguments.length;n+=1){let r=arguments[n];r>=0&&n>0&&(e+=` `),e+=t(r)}return e}let r=this.commands;e.optimize&&(r=JSON.parse(JSON.stringify(this.commands)),r=ae(r));let i=e.flipY,a=e.flipYBase;if(i===!0&&a===void 0){let e=new j;e.extend(r);let t=e.getBoundingBox();a=t.y1+t.y2}let o=``;for(let e=0;e<r.length;e+=1){let t=r[e];t.type===`M`?o+=`M`+n(t.x,i?a-t.y:t.y):t.type===`L`?o+=`L`+n(t.x,i?a-t.y:t.y):t.type===`C`?o+=`C`+n(t.x1,i?a-t.y1:t.y1,t.x2,i?a-t.y2:t.y2,t.x,i?a-t.y:t.y):t.type===`Q`?o+=`Q`+n(t.x1,i?a-t.y1:t.y1,t.x,i?a-t.y:t.y):t.type===`Z`&&(o+=`Z`)}return o},j.prototype.toSVG=function(e,t){this._layers&&this._layers.length&&console.warn(`toSVG() does not support colr font layers yet`),this._image&&console.warn(`toSVG() does not support SVG glyphs yet`),t||=this.toPathData(e);let n=`<path d="`;return n+=t,n+=`"`,this.fill!==void 0&&this.fill!==`black`&&(this.fill===null?n+=` fill="none"`:n+=` fill="`+this.fill+`"`),this.stroke&&(n+=` stroke="`+this.stroke+`" stroke-width="`+this.strokeWidth+`"`),n+=`/>`,n},j.prototype.toDOMElement=function(e,t){this._layers&&this._layers.length&&console.warn(`toDOMElement() does not support colr font layers yet`),t||=this.toPathData(e);let n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return n.setAttribute(`d`,t),this.fill!==void 0&&this.fill!==`black`&&(this.fill===null?n.setAttribute(`fill`,`none`):n.setAttribute(`fill`,this.fill)),this.stroke&&(n.setAttribute(`stroke`,this.stroke),n.setAttribute(`stroke-width`,this.strokeWidth)),n};var se=j;function ce(e){throw Error(e)}function le(e,t){e||ce(t)}var P={fail:ce,argument:le,assert:le},ue=32768,de=2147483648,fe=-32768,pe=32767+1/65536,me={},F={},I={};function L(e){return function(){return e}}F.BYTE=function(e){return P.argument(e>=0&&e<=255,`Byte value should be between 0 and 255.`),[e]},I.BYTE=L(1),F.CHAR=function(e){return[e.charCodeAt(0)]},I.CHAR=L(1),F.CHARARRAY=function(e){e??(e=``,console.warn(`CHARARRAY with undefined or null value encountered and treated as an empty string. This is probably caused by a missing glyph name.`));let t=[];for(let n=0;n<e.length;n+=1)t[n]=e.charCodeAt(n);return t},I.CHARARRAY=function(e){return e===void 0?0:e.length},F.USHORT=function(e){return[e>>8&255,e&255]},I.USHORT=L(2),F.SHORT=function(e){return e>=ue&&(e=-(2*ue-e)),[e>>8&255,e&255]},I.SHORT=L(2),F.UINT24=function(e){return[e>>16&255,e>>8&255,e&255]},I.UINT24=L(3),F.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,e&255]},I.ULONG=L(4),F.LONG=function(e){return e>=de&&(e=-(2*de-e)),[e>>24&255,e>>16&255,e>>8&255,e&255]},I.LONG=L(4),F.FLOAT=function(e){if(e>pe||e<fe)throw Error(`Value ${e} is outside the range of representable values in 16.16 format`);let t=Math.round(e*65536)<<0;return F.ULONG(t)},I.FLOAT=I.ULONG,F.FIXED=F.ULONG,I.FIXED=I.ULONG,F.FWORD=F.SHORT,I.FWORD=I.SHORT,F.UFWORD=F.USHORT,I.UFWORD=I.USHORT,F.F2DOT14=function(e){return F.USHORT(e*16384)},I.F2DOT14=I.USHORT,F.LONGDATETIME=function(e){return[0,0,0,0,e>>24&255,e>>16&255,e>>8&255,e&255]},I.LONGDATETIME=L(8),F.TAG=function(e){return P.argument(e.length===4,`Tag should be exactly 4 ASCII characters.`),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]},I.TAG=L(4),F.Card8=F.BYTE,I.Card8=I.BYTE,F.Card16=F.USHORT,I.Card16=I.USHORT,F.OffSize=F.BYTE,I.OffSize=I.BYTE,F.SID=F.USHORT,I.SID=I.USHORT,F.NUMBER=function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?(e-=108,[(e>>8)+247,e&255]):e>=-1131&&e<=-108?(e=-e-108,[(e>>8)+251,e&255]):e>=-32768&&e<=32767?F.NUMBER16(e):F.NUMBER32(e)},I.NUMBER=function(e){return F.NUMBER(e).length},F.NUMBER16=function(e){return[28,e>>8&255,e&255]},I.NUMBER16=L(3),F.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,e&255]},I.NUMBER32=L(5),F.REAL=function(e){let t=e.toString(),n=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);if(n){let r=parseFloat(`1e`+((n[2]?+n[2]:0)+n[1].length));t=(Math.round(e*r)/r).toString()}let r=``;for(let e=0,n=t.length;e<n;e+=1){let n=t[e];r+=n===`e`?t[++e]===`-`?`c`:`b`:n===`.`?`a`:n===`-`?`e`:n}r+=r.length&1?`f`:`ff`;let i=[30];for(let e=0,t=r.length;e<t;e+=2)i.push(parseInt(r.substr(e,2),16));return i},I.REAL=function(e){return F.REAL(e).length},F.NAME=F.CHARARRAY,I.NAME=I.CHARARRAY,F.STRING=F.CHARARRAY,I.STRING=I.CHARARRAY,me.UTF8=function(e,t,n){let r=[],i=n;for(let n=0;n<i;n++,t+=1)r[n]=e.getUint8(t);return String.fromCharCode.apply(null,r)},me.UTF16=function(e,t,n){let r=[],i=n/2;for(let n=0;n<i;n++,t+=2)r[n]=e.getUint16(t);return String.fromCharCode.apply(null,r)},F.UTF16=function(e){let t=[];for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);t[t.length]=r>>8&255,t[t.length]=r&255}return t},I.UTF16=function(e){return e.length*2};var he={"x-mac-croatian":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č…\xA0ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ`,"x-mac-cyrillic":`АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»…\xA0ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю`,"x-mac-gaelic":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»…\xA0ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ`,"x-mac-greek":`Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»…\xA0ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­`,"x-mac-icelandic":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-inuit":`ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xA0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł`,"x-mac-ce":`ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»…\xA0ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ`,macintosh:`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-romanian":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-turkish":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ`};me.MACSTRING=function(e,t,n,r){let i=he[r];if(i===void 0)return;let a=``;for(let r=0;r<n;r++){let n=e.getUint8(t+r);a+=n<=127?String.fromCharCode(n):i[n&127]}return a};var R=typeof WeakMap==`function`&&new WeakMap,ge,z=function(e){if(!ge){ge={};for(let e in he)ge[e]=new String(e)}let t=ge[e];if(t===void 0)return;if(R){let e=R.get(t);if(e!==void 0)return e}let n=he[e];if(n===void 0)return;let r={};for(let e=0;e<n.length;e++)r[n.charCodeAt(e)]=e+128;return R&&R.set(t,r),r};F.MACSTRING=function(e,t){let n=z(t);if(n===void 0)return;let r=[];for(let t=0;t<e.length;t++){let i=e.charCodeAt(t);if(i>=128&&(i=n[i],i===void 0))return;r[t]=i}return r},I.MACSTRING=function(e,t){let n=F.MACSTRING(e,t);return n===void 0?0:n.length};function _e(e){return e>=-128&&e<=127}function B(e,t,n){let r=0,i=e.length;for(;t<i&&r<64&&e[t]===0;)++t,++r;return n.push(128|r-1),t}function V(e,t,n){let r=0,i=e.length,a=t;for(;a<i&&r<64;){let t=e[a];if(!_e(t)||t===0&&a+1<i&&e[a+1]===0)break;++a,++r}n.push(r-1);for(let r=t;r<a;++r)n.push(e[r]+256&255);return a}function ve(e,t,n){let r=0,i=e.length,a=t;for(;a<i&&r<64;){let t=e[a];if(t===0||_e(t)&&a+1<i&&_e(e[a+1]))break;++a,++r}n.push(64|r-1);for(let r=t;r<a;++r){let t=e[r];n.push(t+65536>>8&255,t+256&255)}return a}F.VARDELTAS=function(e){let t=0,n=[];for(;t<e.length;){let r=e[t];t=r===0?B(e,t,n):r>=-128&&r<=127?V(e,t,n):ve(e,t,n)}return n},F.INDEX=function(e){let t=1,n=[t],r=[];for(let i=0;i<e.length;i+=1){let a=F.OBJECT(e[i]);Array.prototype.push.apply(r,a),t+=a.length,n.push(t)}if(r.length===0)return[0,0];let i=[],a=1+Math.floor(Math.log(t)/Math.log(2))/8|0,o=[void 0,F.BYTE,F.USHORT,F.UINT24,F.ULONG][a];for(let e=0;e<n.length;e+=1){let t=o(n[e]);Array.prototype.push.apply(i,t)}return Array.prototype.concat(F.Card16(e.length),F.OffSize(a),i,r)},I.INDEX=function(e){return F.INDEX(e).length},F.DICT=function(e){let t=[],n=Object.keys(e),r=n.length;for(let i=0;i<r;i+=1){let r=parseInt(n[i],0),a=e[r],o=F.OPERAND(a.value,a.type),s=F.OPERATOR(r);for(let e=0;e<o.length;e++)t.push(o[e]);for(let e=0;e<s.length;e++)t.push(s[e])}return t},I.DICT=function(e){return F.DICT(e).length},F.OPERATOR=function(e){return e<1200?[e]:[12,e-1200]},F.OPERAND=function(e,t){let n=[];if(Array.isArray(t))for(let r=0;r<t.length;r+=1){P.argument(e.length===t.length,`Not enough arguments given for type`+t);let i=F.OPERAND(e[r],t[r]);for(let e=0;e<i.length;e++)n.push(i[e])}else if(t===`SID`){let t=F.NUMBER(e);for(let e=0;e<t.length;e++)n.push(t[e])}else if(t===`offset`){let t=F.NUMBER32(e);for(let e=0;e<t.length;e++)n.push(t[e])}else if(t===`number`){let t=F.NUMBER(e);for(let e=0;e<t.length;e++)n.push(t[e])}else if(t===`real`){let t=F.REAL(e);for(let e=0;e<t.length;e++)n.push(t[e])}else throw Error(`Unknown operand type `+t);return n},F.OP=F.BYTE,I.OP=I.BYTE;var ye=typeof WeakMap==`function`&&new WeakMap;F.CHARSTRING=function(e){if(ye){let t=ye.get(e);if(t!==void 0)return t}let t=[],n=e.length;for(let r=0;r<n;r+=1){let n=e[r],i=F[n.type](n.value);for(let e=0;e<i.length;e++)t.push(i[e])}return ye&&ye.set(e,t),t},I.CHARSTRING=function(e){return F.CHARSTRING(e).length},F.OBJECT=function(e){let t=F[e.type];return P.argument(t!==void 0,`No encoding function for type `+e.type),t(e.value)},I.OBJECT=function(e){let t=I[e.type];return P.argument(t!==void 0,`No sizeOf function for type `+e.type),t(e.value)},F.TABLE=function(e){let t=[],n=(e.fields||[]).length,r=[],i=[];for(let a=0;a<n;a+=1){let n=e.fields[a],o=F[n.type];P.argument(o!==void 0,`No encoding function for field type `+n.type+` (`+n.name+`)`);let s=e[n.name];s===void 0&&(s=n.value);let c=o(s);if(n.type===`TABLE`)s.fields!==null&&(i.push(t.length),r.push(c)),t.push(0,0);else for(let e=0;e<c.length;e++)t.push(c[e])}for(let n=0;n<r.length;n+=1){let a=i[n],o=t.length;P.argument(o<65536,`Table `+e.tableName+` too big.`),t[a]=o>>8,t[a+1]=o&255;for(let e=0;e<r[n].length;e++)t.push(r[n][e])}return t},I.TABLE=function(e){let t=0,n=(e.fields||[]).length;for(let r=0;r<n;r+=1){let n=e.fields[r],i=I[n.type];P.argument(i!==void 0,`No sizeOf function for field type `+n.type+` (`+n.name+`)`);let a=e[n.name];a===void 0&&(a=n.value),t+=i(a),n.type===`TABLE`&&(t+=2)}return t},F.RECORD=F.TABLE,I.RECORD=I.TABLE,F.LITERAL=function(e){return e},I.LITERAL=function(e){return e.length};function H(e,t,n){if(t&&t.length)for(let e=0;e<t.length;e+=1){let n=t[e];this[n.name]=n.value}if(this.tableName=e,this.fields=t,n){let e=Object.keys(n);for(let t=0;t<e.length;t+=1){let r=e[t],i=n[r];this[r]!==void 0&&(this[r]=i)}}}H.prototype.encode=function(){return F.TABLE(this)},H.prototype.sizeOf=function(){return I.TABLE(this)};function be(e,t,n){n===void 0&&(n=t.length);let r=Array(t.length+1);r[0]={name:e+`Count`,type:`USHORT`,value:n};for(let n=0;n<t.length;n++)r[n+1]={name:e+n,type:`USHORT`,value:t[n]};return r}function xe(e,t,n){let r=t.length,i=Array(r+1);i[0]={name:e+`Count`,type:`USHORT`,value:r};for(let a=0;a<r;a++)i[a+1]={name:e+a,type:`TABLE`,value:n(t[a],a)};return i}function Se(e,t,n){let r=t.length,i=[];i[0]={name:e+`Count`,type:`USHORT`,value:r};for(let e=0;e<r;e++)i=i.concat(n(t[e],e));return i}function Ce(e){e.format===1?H.call(this,`coverageTable`,[{name:`coverageFormat`,type:`USHORT`,value:1}].concat(be(`glyph`,e.glyphs))):e.format===2?H.call(this,`coverageTable`,[{name:`coverageFormat`,type:`USHORT`,value:2}].concat(Se(`rangeRecord`,e.ranges,function(e,t){return[{name:`startGlyphID`+t,type:`USHORT`,value:e.start},{name:`endGlyphID`+t,type:`USHORT`,value:e.end},{name:`startCoverageIndex`+t,type:`USHORT`,value:e.index}]}))):P.assert(!1,`Coverage format must be 1 or 2.`)}Ce.prototype=Object.create(H.prototype),Ce.prototype.constructor=Ce;function we(e){H.call(this,`scriptListTable`,Se(`scriptRecord`,e,function(e,t){let n=e.script,r=n.defaultLangSys;return P.assert(!!r,`Unable to write GSUB: script `+e.tag+` has no default language system.`),[{name:`scriptTag`+t,type:`TAG`,value:e.tag},{name:`script`+t,type:`TABLE`,value:new H(`scriptTable`,[{name:`defaultLangSys`,type:`TABLE`,value:new H(`defaultLangSys`,[{name:`lookupOrder`,type:`USHORT`,value:0},{name:`reqFeatureIndex`,type:`USHORT`,value:r.reqFeatureIndex}].concat(be(`featureIndex`,r.featureIndexes)))}].concat(Se(`langSys`,n.langSysRecords,function(e,t){let n=e.langSys;return[{name:`langSysTag`+t,type:`TAG`,value:e.tag},{name:`langSys`+t,type:`TABLE`,value:new H(`langSys`,[{name:`lookupOrder`,type:`USHORT`,value:0},{name:`reqFeatureIndex`,type:`USHORT`,value:n.reqFeatureIndex}].concat(be(`featureIndex`,n.featureIndexes)))}]})))}]}))}we.prototype=Object.create(H.prototype),we.prototype.constructor=we;function Te(e){H.call(this,`featureListTable`,Se(`featureRecord`,e,function(e,t){let n=e.feature;return[{name:`featureTag`+t,type:`TAG`,value:e.tag},{name:`feature`+t,type:`TABLE`,value:new H(`featureTable`,[{name:`featureParams`,type:`USHORT`,value:n.featureParams}].concat(be(`lookupListIndex`,n.lookupListIndexes)))}]}))}Te.prototype=Object.create(H.prototype),Te.prototype.constructor=Te;function Ee(e,t){H.call(this,`lookupListTable`,xe(`lookup`,e,function(e){let n=t[e.lookupType];return P.assert(!!n,`Unable to write GSUB lookup type `+e.lookupType+` tables.`),new H(`lookupTable`,[{name:`lookupType`,type:`USHORT`,value:e.lookupType},{name:`lookupFlag`,type:`USHORT`,value:e.lookupFlag}].concat(xe(`subtable`,e.subtables,n)))}))}Ee.prototype=Object.create(H.prototype),Ee.prototype.constructor=Ee;function De(e){e.format===1?H.call(this,`classDefTable`,[{name:`classFormat`,type:`USHORT`,value:1},{name:`startGlyphID`,type:`USHORT`,value:e.startGlyph}].concat(be(`glyph`,e.classes))):e.format===2?H.call(this,`classDefTable`,[{name:`classFormat`,type:`USHORT`,value:2}].concat(Se(`rangeRecord`,e.ranges,function(e,t){return[{name:`startGlyphID`+t,type:`USHORT`,value:e.start},{name:`endGlyphID`+t,type:`USHORT`,value:e.end},{name:`class`+t,type:`USHORT`,value:e.classId}]}))):P.assert(!1,`Class format must be 1 or 2.`)}De.prototype=Object.create(H.prototype),De.prototype.constructor=De;var U={Table:H,Record:H,Coverage:Ce,ClassDef:De,ScriptList:we,FeatureList:Te,LookupList:Ee,ushortList:be,tableList:xe,recordList:Se};function Oe(e,t){return e.getUint8(t)}function ke(e,t){return e.getUint16(t,!1)}function Ae(e,t){return e.getInt16(t,!1)}function je(e,t){return(e.getUint16(t)<<8)+e.getUint8(t+2)}function Me(e,t){return e.getUint32(t,!1)}function Ne(e,t){return e.getInt32(t,!1)}function Pe(e,t){return e.getInt16(t,!1)+e.getUint16(t+2,!1)/65535}function Fe(e,t){let n=``;for(let r=t;r<t+4;r+=1)n+=String.fromCharCode(e.getInt8(r));return n}function Ie(e,t,n){let r=0;for(let i=0;i<n;i+=1)r<<=8,r+=e.getUint8(t+i);return r}function Le(e,t,n){let r=[];for(let i=t;i<n;i+=1)r.push(e.getUint8(i));return r}function Re(e){let t=``;for(let n=0;n<e.length;n+=1)t+=String.fromCharCode(e[n]);return t}var ze={byte:1,uShort:2,f2dot14:2,short:2,uInt24:3,uLong:4,fixed:4,longDateTime:8,tag:4},Be={LONG_WORDS:32768,WORD_DELTA_COUNT_MASK:32767,SHARED_POINT_NUMBERS:32768,COUNT_MASK:4095,EMBEDDED_PEAK_TUPLE:32768,INTERMEDIATE_REGION:16384,PRIVATE_POINT_NUMBERS:8192,TUPLE_INDEX_MASK:4095,POINTS_ARE_WORDS:128,POINT_RUN_COUNT_MASK:127,DELTAS_ARE_ZERO:128,DELTAS_ARE_WORDS:64,DELTA_RUN_COUNT_MASK:63,INNER_INDEX_BIT_COUNT_MASK:15,MAP_ENTRY_SIZE_MASK:48};function W(e,t){this.data=e,this.offset=t,this.relativeOffset=0}W.prototype.parseByte=function(){let e=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},W.prototype.parseChar=function(){let e=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},W.prototype.parseCard8=W.prototype.parseByte,W.prototype.parseUShort=function(){let e=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},W.prototype.parseCard16=W.prototype.parseUShort,W.prototype.parseSID=W.prototype.parseUShort,W.prototype.parseOffset16=W.prototype.parseUShort,W.prototype.parseShort=function(){let e=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},W.prototype.parseF2Dot14=function(){let e=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,e},W.prototype.parseUInt24=function(){let e=je(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=3,e},W.prototype.parseULong=function(){let e=Me(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},W.prototype.parseLong=function(){let e=Ne(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},W.prototype.parseOffset32=W.prototype.parseULong,W.prototype.parseFixed=function(){let e=Pe(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},W.prototype.parseString=function(e){let t=this.data,n=this.offset+this.relativeOffset,r=``;this.relativeOffset+=e;for(let i=0;i<e;i++)r+=String.fromCharCode(t.getUint8(n+i));return r},W.prototype.parseTag=function(){return this.parseString(4)},W.prototype.parseLongDateTime=function(){let e=Me(this.data,this.offset+this.relativeOffset+4);return e-=2082844800,this.relativeOffset+=8,e},W.prototype.parseVersion=function(e){let t=ke(this.data,this.offset+this.relativeOffset),n=ke(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,e===void 0&&(e=4096),t+n/e/10},W.prototype.skip=function(e,t){t===void 0&&(t=1),this.relativeOffset+=ze[e]*t},W.prototype.parseULongList=function(e){e===void 0&&(e=this.parseULong());let t=Array(e),n=this.data,r=this.offset+this.relativeOffset;for(let i=0;i<e;i++)t[i]=n.getUint32(r),r+=4;return this.relativeOffset+=e*4,t},W.prototype.parseOffset16List=W.prototype.parseUShortList=function(e){e===void 0&&(e=this.parseUShort());let t=Array(e),n=this.data,r=this.offset+this.relativeOffset;for(let i=0;i<e;i++)t[i]=n.getUint16(r),r+=2;return this.relativeOffset+=e*2,t},W.prototype.parseShortList=function(e){let t=Array(e),n=this.data,r=this.offset+this.relativeOffset;for(let i=0;i<e;i++)t[i]=n.getInt16(r),r+=2;return this.relativeOffset+=e*2,t},W.prototype.parseByteList=function(e){let t=Array(e),n=this.data,r=this.offset+this.relativeOffset;for(let i=0;i<e;i++)t[i]=n.getUint8(r++);return this.relativeOffset+=e,t},W.prototype.parseList=function(e,t){t||(t=e,e=this.parseUShort());let n=Array(e);for(let r=0;r<e;r++)n[r]=t.call(this);return n},W.prototype.parseList32=function(e,t){t||(t=e,e=this.parseULong());let n=Array(e);for(let r=0;r<e;r++)n[r]=t.call(this);return n},W.prototype.parseRecordList=function(e,t){t||(t=e,e=this.parseUShort());let n=Array(e),r=Object.keys(t);for(let i=0;i<e;i++){let e={};for(let n=0;n<r.length;n++){let i=r[n];e[i]=t[i].call(this)}n[i]=e}return n},W.prototype.parseRecordList32=function(e,t){t||(t=e,e=this.parseULong());let n=Array(e),r=Object.keys(t);for(let i=0;i<e;i++){let e={};for(let n=0;n<r.length;n++){let i=r[n];e[i]=t[i].call(this)}n[i]=e}return n},W.prototype.parseTupleRecords=function(e,t){let n=[];for(let r=0;r<e;r++){let e=[];for(let n=0;n<t;n++)e.push(this.parseF2Dot14());n.push(e)}return n},W.prototype.parseStruct=function(e){if(typeof e==`function`)return e.call(this);{let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];n[i]=e[i].call(this)}return n}},W.prototype.parseValueRecord=function(e){if(e===void 0&&(e=this.parseUShort()),e===0)return;let t={};return e&1&&(t.xPlacement=this.parseShort()),e&2&&(t.yPlacement=this.parseShort()),e&4&&(t.xAdvance=this.parseShort()),e&8&&(t.yAdvance=this.parseShort()),e&16&&(t.xPlaDevice=void 0,this.parseShort()),e&32&&(t.yPlaDevice=void 0,this.parseShort()),e&64&&(t.xAdvDevice=void 0,this.parseShort()),e&128&&(t.yAdvDevice=void 0,this.parseShort()),t},W.prototype.parseValueRecordList=function(){let e=this.parseUShort(),t=this.parseUShort(),n=Array(t);for(let r=0;r<t;r++)n[r]=this.parseValueRecord(e);return n},W.prototype.parsePointer=function(e){let t=this.parseOffset16();if(t>0)return new W(this.data,this.offset+t).parseStruct(e)},W.prototype.parsePointer32=function(e){let t=this.parseOffset32();if(t>0)return new W(this.data,this.offset+t).parseStruct(e)},W.prototype.parseListOfLists=function(e){let t=this.parseOffset16List(),n=t.length,r=this.relativeOffset,i=Array(n);for(let r=0;r<n;r++){let n=t[r];if(n===0){i[r]=void 0;continue}if(this.relativeOffset=n,e){let t=this.parseOffset16List(),a=Array(t.length);for(let r=0;r<t.length;r++)this.relativeOffset=n+t[r],a[r]=e.call(this);i[r]=a}else i[r]=this.parseUShortList()}return this.relativeOffset=r,i},W.prototype.parseCoverage=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort(),n=this.parseUShort();if(t===1)return{format:1,glyphs:this.parseUShortList(n)};if(t===2){let e=Array(n);for(let t=0;t<n;t++)e[t]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:e}}throw Error(`0x`+e.toString(16)+`: Coverage format must be 1 or 2.`)},W.prototype.parseClassDef=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort();return t===1?{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()}:t===2?{format:2,ranges:this.parseRecordList({start:W.uShort,end:W.uShort,classId:W.uShort})}:(console.warn(`0x${e.toString(16)}: This font file uses an invalid ClassDef format of ${t}. It might be corrupted and should be reacquired if it doesn't display as intended.`),{format:t})},W.list=function(e,t){return function(){return this.parseList(e,t)}},W.list32=function(e,t){return function(){return this.parseList32(e,t)}},W.recordList=function(e,t){return function(){return this.parseRecordList(e,t)}},W.recordList32=function(e,t){return function(){return this.parseRecordList32(e,t)}},W.pointer=function(e){return function(){return this.parsePointer(e)}},W.pointer32=function(e){return function(){return this.parsePointer32(e)}},W.tag=W.prototype.parseTag,W.byte=W.prototype.parseByte,W.uShort=W.offset16=W.prototype.parseUShort,W.uShortList=W.prototype.parseUShortList,W.uInt24=W.prototype.parseUInt24,W.uLong=W.offset32=W.prototype.parseULong,W.uLongList=W.prototype.parseULongList,W.fixed=W.prototype.parseFixed,W.f2Dot14=W.prototype.parseF2Dot14,W.struct=W.prototype.parseStruct,W.coverage=W.prototype.parseCoverage,W.classDef=W.prototype.parseClassDef;var Ve={reserved:W.uShort,reqFeatureIndex:W.uShort,featureIndexes:W.uShortList};W.prototype.parseScriptList=function(){return this.parsePointer(W.recordList({tag:W.tag,script:W.pointer({defaultLangSys:W.pointer(Ve),langSysRecords:W.recordList({tag:W.tag,langSys:W.pointer(Ve)})})}))||[]},W.prototype.parseFeatureList=function(){return this.parsePointer(W.recordList({tag:W.tag,feature:W.pointer({featureParams:W.offset16,lookupListIndexes:W.uShortList})}))||[]},W.prototype.parseLookupList=function(e){return this.parsePointer(W.list(W.pointer(function(){let t=this.parseUShort();P.argument(1<=t&&t<=9,`GPOS/GSUB lookup type `+t+` unknown.`);let n=this.parseUShort(),r=n&16;return{lookupType:t,lookupFlag:n,subtables:this.parseList(W.pointer(e[t])),markFilteringSet:r?this.parseUShort():void 0}})))||[]},W.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){let e=this.parseUShort(),t=this.parseUShort();return P.argument(e===1&&t<1,`GPOS/GSUB feature variations table unknown.`),this.parseRecordList32({conditionSetOffset:W.offset32,featureTableSubstitutionOffset:W.offset32})})||[]},W.prototype.parseVariationStore=function(){let e=this.relativeOffset,t=this.parseUShort(),n={itemVariationStore:this.parseItemVariationStore()};return this.relativeOffset=e+t+2,n},W.prototype.parseItemVariationStore=function(){let e=this.relativeOffset,t={format:this.parseUShort(),variationRegions:[],itemVariationSubtables:[]},n=this.parseOffset32(),r=this.parseUShort(),i=this.parseULongList(r);this.relativeOffset=e+n,t.variationRegions=this.parseVariationRegionList();for(let n=0;n<r;n++){let r=i[n];this.relativeOffset=e+r,t.itemVariationSubtables.push(this.parseItemVariationSubtable())}return t},W.prototype.parseVariationRegionList=function(){let e=this.parseUShort(),t=this.parseUShort();return this.parseRecordList(t,{regionAxes:W.recordList(e,{startCoord:W.f2Dot14,peakCoord:W.f2Dot14,endCoord:W.f2Dot14})})},W.prototype.parseItemVariationSubtable=function(){let e=this.parseUShort(),t=this.parseUShort(),n=this.parseUShortList(),r=n.length;return{regionIndexes:n,deltaSets:e&&r?this.parseDeltaSets(e,t,r):[]}},W.prototype.parseDeltaSetIndexMap=function(){let e=this.parseByte(),t=this.parseByte(),n=[],r=0;switch(e){case 0:r=this.parseUShort();break;case 1:r=this.parseULong();break;default:console.error(`unsupported DeltaSetIndexMap format ${e}`)}if(!r)return{format:e,entryFormat:t};let i=(t&Be.INNER_INDEX_BIT_COUNT_MASK)+1,a=((t&Be.MAP_ENTRY_SIZE_MASK)>>4)+1;for(let e=0;e<r;e++){let e;if(a===1)e=this.parseByte();else if(a===2)e=this.parseUShort();else if(a===3)e=this.parseUInt24();else if(a===4)e=this.parseULong();else throw Error(`Invalid entry size of ${a}`);let t=e>>i,r=e&(1<<i)-1;n.push({outerIndex:t,innerIndex:r})}return{format:e,entryFormat:t,map:n}},W.prototype.parseDeltaSets=function(e,t,n){let r=Array.from({length:e},()=>[]),i=t&Be.LONG_WORDS,a=t&Be.WORD_DELTA_COUNT_MASK;if(a>n)throw Error(`wordCount must be less than or equal to regionIndexCount`);let o=(i?this.parseLong:this.parseShort).bind(this),s=(i?this.parseShort:this.parseChar).bind(this);for(let t=0;t<e;t++)for(let e=0;e<n;e++)e<a?r[t].push(o()):r[t].push(s());return r},W.prototype.parseTupleVariationStoreList=function(e,t,n){let r=this.parseUShort(),i=this.parseUShort()&1,a=this.parseOffset32(),o=(i?this.parseULong:this.parseUShort).bind(this),s={},c=o();i||(c*=2);let l;for(let u=0;u<r;u++){l=o(),i||(l*=2);let r=l-c;s[u]=r?this.parseTupleVariationStore(a+c,e,t,n,u):void 0,c=l}return s},W.prototype.parseTupleVariationStore=function(e,t,n,r,i){let a=this.relativeOffset;this.relativeOffset=e,n===`cvar`&&(this.relativeOffset+=4);let o=this.parseUShort(),s=!!(o&Be.SHARED_POINT_NUMBERS),c=o&Be.COUNT_MASK,l=this.parseOffset16(),u=[],d=[];for(let e=0;e<c;e++){let e=this.parseTupleVariationHeader(t,n);u.push(e)}this.relativeOffset!==e+l&&(console.warn(`Unexpected offset after parsing tuple variation headers! Expected ${e+l}, actually ${this.relativeOffset}`),this.relativeOffset=e+l),s&&(d=this.parsePackedPointNumbers());let f=this.relativeOffset;for(let e=0;e<c;e++){let t=u[e];t.privatePoints=[],this.relativeOffset=f,n===`cvar`&&!t.peakTuple&&console.warn(`An embedded peak tuple is required in TupleVariationHeaders for the cvar table.`),t.flags.privatePointNumbers&&(t.privatePoints=this.parsePackedPointNumbers()),delete t.flags;let a=this.offset,o=this.relativeOffset,s=e=>{let s,c,l=()=>{let e=0;if(n===`gvar`){if(e=t.privatePoints.length||d.length,!e){let t=r.get(i);t.path,e=t.points.length,e+=4}}else n===`cvar`&&(e=r.length);this.offset=a,this.relativeOffset=o,s=this.parsePackedDeltas(e),n===`gvar`&&(c=this.parsePackedDeltas(e))};return{configurable:!0,get:function(){return s===void 0&&l(),e===`deltasY`?c:s},set:function(t){s===void 0&&l(),e===`deltasY`?c=t:s=t}}};Object.defineProperty(t,"deltas",s.call(this,`deltas`)),n===`gvar`&&Object.defineProperty(t,"deltasY",s.call(this,`deltasY`)),f+=t.variationDataSize,delete t.variationDataSize}this.relativeOffset=a;let p={headers:u};return p.sharedPoints=d,p},W.prototype.parseTupleVariationHeader=function(e,t){let n=this.parseUShort(),r=this.parseUShort(),i=!!(r&Be.EMBEDDED_PEAK_TUPLE),a=!!(r&Be.INTERMEDIATE_REGION),o=!!(r&Be.PRIVATE_POINT_NUMBERS),s=i?void 0:r&Be.TUPLE_INDEX_MASK,c={variationDataSize:n,peakTuple:i?this.parseTupleRecords(1,e)[0]:void 0,intermediateStartTuple:a?this.parseTupleRecords(1,e)[0]:void 0,intermediateEndTuple:a?this.parseTupleRecords(1,e)[0]:void 0,flags:{embeddedPeakTuple:i,intermediateRegion:a,privatePointNumbers:o}};return t===`gvar`&&(c.sharedTupleRecordsIndex=s),c},W.prototype.parsePackedPointNumbers=function(){let e=this.parseByte(),t=[],n=e;if(e>=128){let t=this.parseByte();n=(e&Be.POINT_RUN_COUNT_MASK)<<8|t}let r=0;for(;t.length<n;){let e=this.parseByte(),i=!!(e&Be.POINTS_ARE_WORDS),a=(e&Be.POINT_RUN_COUNT_MASK)+1;for(let e=0;e<a&&t.length<n;e++){let e;e=i?this.parseUShort():this.parseByte(),r+=e,t.push(r)}}return t},W.prototype.parsePackedDeltas=function(e){let t=[];for(;t.length<e;){let n=this.parseByte(),r=!!(n&Be.DELTAS_ARE_ZERO),i=!!(n&Be.DELTAS_ARE_WORDS),a=(n&Be.DELTA_RUN_COUNT_MASK)+1;for(let n=0;n<a&&t.length<e;n++)r?t.push(0):i?t.push(this.parseShort()):t.push(this.parseChar())}return t};var G={getByte:Oe,getCard8:Oe,getUShort:ke,getCard16:ke,getShort:Ae,getUInt24:je,getULong:Me,getFixed:Pe,getTag:Fe,getOffset:Ie,getBytes:Le,bytesToString:Re,Parser:W},He=[`copyright`,`fontFamily`,`fontSubfamily`,`uniqueID`,`fullName`,`version`,`postScriptName`,`trademark`,`manufacturer`,`designer`,`description`,`manufacturerURL`,`designerURL`,`license`,`licenseURL`,`reserved`,`preferredFamily`,`preferredSubfamily`,`compatibleFullName`,`sampleText`,`postScriptFindFontName`,`wwsFamily`,`wwsSubfamily`],Ue={0:`en`,1:`fr`,2:`de`,3:`it`,4:`nl`,5:`sv`,6:`es`,7:`da`,8:`pt`,9:`no`,10:`he`,11:`ja`,12:`ar`,13:`fi`,14:`el`,15:`is`,16:`mt`,17:`tr`,18:`hr`,19:`zh-Hant`,20:`ur`,21:`hi`,22:`th`,23:`ko`,24:`lt`,25:`pl`,26:`hu`,27:`es`,28:`lv`,29:`se`,30:`fo`,31:`fa`,32:`ru`,33:`zh`,34:`nl-BE`,35:`ga`,36:`sq`,37:`ro`,38:`cz`,39:`sk`,40:`si`,41:`yi`,42:`sr`,43:`mk`,44:`bg`,45:`uk`,46:`be`,47:`uz`,48:`kk`,49:`az-Cyrl`,50:`az-Arab`,51:`hy`,52:`ka`,53:`mo`,54:`ky`,55:`tg`,56:`tk`,57:`mn-CN`,58:`mn`,59:`ps`,60:`ks`,61:`ku`,62:`sd`,63:`bo`,64:`ne`,65:`sa`,66:`mr`,67:`bn`,68:`as`,69:`gu`,70:`pa`,71:`or`,72:`ml`,73:`kn`,74:`ta`,75:`te`,76:`si`,77:`my`,78:`km`,79:`lo`,80:`vi`,81:`id`,82:`tl`,83:`ms`,84:`ms-Arab`,85:`am`,86:`ti`,87:`om`,88:`so`,89:`sw`,90:`rw`,91:`rn`,92:`ny`,93:`mg`,94:`eo`,128:`cy`,129:`eu`,130:`ca`,131:`la`,132:`qu`,133:`gn`,134:`ay`,135:`tt`,136:`ug`,137:`dz`,138:`jv`,139:`su`,140:`gl`,141:`af`,142:`br`,143:`iu`,144:`gd`,145:`gv`,146:`ga`,147:`to`,148:`el-polyton`,149:`kl`,150:`az`,151:`nn`},We={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Ge={1078:`af`,1052:`sq`,1156:`gsw`,1118:`am`,5121:`ar-DZ`,15361:`ar-BH`,3073:`ar`,2049:`ar-IQ`,11265:`ar-JO`,13313:`ar-KW`,12289:`ar-LB`,4097:`ar-LY`,6145:`ary`,8193:`ar-OM`,16385:`ar-QA`,1025:`ar-SA`,10241:`ar-SY`,7169:`aeb`,14337:`ar-AE`,9217:`ar-YE`,1067:`hy`,1101:`as`,2092:`az-Cyrl`,1068:`az`,1133:`ba`,1069:`eu`,1059:`be`,2117:`bn`,1093:`bn-IN`,8218:`bs-Cyrl`,5146:`bs`,1150:`br`,1026:`bg`,1027:`ca`,3076:`zh-HK`,5124:`zh-MO`,2052:`zh`,4100:`zh-SG`,1028:`zh-TW`,1155:`co`,1050:`hr`,4122:`hr-BA`,1029:`cs`,1030:`da`,1164:`prs`,1125:`dv`,2067:`nl-BE`,1043:`nl`,3081:`en-AU`,10249:`en-BZ`,4105:`en-CA`,9225:`en-029`,16393:`en-IN`,6153:`en-IE`,8201:`en-JM`,17417:`en-MY`,5129:`en-NZ`,13321:`en-PH`,18441:`en-SG`,7177:`en-ZA`,11273:`en-TT`,2057:`en-GB`,1033:`en`,12297:`en-ZW`,1061:`et`,1080:`fo`,1124:`fil`,1035:`fi`,2060:`fr-BE`,3084:`fr-CA`,1036:`fr`,5132:`fr-LU`,6156:`fr-MC`,4108:`fr-CH`,1122:`fy`,1110:`gl`,1079:`ka`,3079:`de-AT`,1031:`de`,5127:`de-LI`,4103:`de-LU`,2055:`de-CH`,1032:`el`,1135:`kl`,1095:`gu`,1128:`ha`,1037:`he`,1081:`hi`,1038:`hu`,1039:`is`,1136:`ig`,1057:`id`,1117:`iu`,2141:`iu-Latn`,2108:`ga`,1076:`xh`,1077:`zu`,1040:`it`,2064:`it-CH`,1041:`ja`,1099:`kn`,1087:`kk`,1107:`km`,1158:`quc`,1159:`rw`,1089:`sw`,1111:`kok`,1042:`ko`,1088:`ky`,1108:`lo`,1062:`lv`,1063:`lt`,2094:`dsb`,1134:`lb`,1071:`mk`,2110:`ms-BN`,1086:`ms`,1100:`ml`,1082:`mt`,1153:`mi`,1146:`arn`,1102:`mr`,1148:`moh`,1104:`mn`,2128:`mn-CN`,1121:`ne`,1044:`nb`,2068:`nn`,1154:`oc`,1096:`or`,1123:`ps`,1045:`pl`,1046:`pt`,2070:`pt-PT`,1094:`pa`,1131:`qu-BO`,2155:`qu-EC`,3179:`qu`,1048:`ro`,1047:`rm`,1049:`ru`,9275:`smn`,4155:`smj-NO`,5179:`smj`,3131:`se-FI`,1083:`se`,2107:`se-SE`,8251:`sms`,6203:`sma-NO`,7227:`sms`,1103:`sa`,7194:`sr-Cyrl-BA`,3098:`sr`,6170:`sr-Latn-BA`,2074:`sr-Latn`,1132:`nso`,1074:`tn`,1115:`si`,1051:`sk`,1060:`sl`,11274:`es-AR`,16394:`es-BO`,13322:`es-CL`,9226:`es-CO`,5130:`es-CR`,7178:`es-DO`,12298:`es-EC`,17418:`es-SV`,4106:`es-GT`,18442:`es-HN`,2058:`es-MX`,19466:`es-NI`,6154:`es-PA`,15370:`es-PY`,10250:`es-PE`,20490:`es-PR`,3082:`es`,1034:`es`,21514:`es-US`,14346:`es-UY`,8202:`es-VE`,2077:`sv-FI`,1053:`sv`,1114:`syr`,1064:`tg`,2143:`tzm`,1097:`ta`,1092:`tt`,1098:`te`,1054:`th`,1105:`bo`,1055:`tr`,1090:`tk`,1152:`ug`,1058:`uk`,1070:`hsb`,1056:`ur`,2115:`uz-Cyrl`,1091:`uz`,1066:`vi`,1106:`cy`,1160:`wo`,1157:`sah`,1144:`ii`,1130:`yo`};function Ke(e,t,n){switch(e){case 0:if(t===65535)return`und`;if(n)return n[t];break;case 1:return Ue[t];case 3:return Ge[t]}}var qe=`utf-16`,Je={0:`macintosh`,1:`x-mac-japanese`,2:`x-mac-chinesetrad`,3:`x-mac-korean`,6:`x-mac-greek`,7:`x-mac-cyrillic`,9:`x-mac-devanagai`,10:`x-mac-gurmukhi`,11:`x-mac-gujarati`,12:`x-mac-oriya`,13:`x-mac-bengali`,14:`x-mac-tamil`,15:`x-mac-telugu`,16:`x-mac-kannada`,17:`x-mac-malayalam`,18:`x-mac-sinhalese`,19:`x-mac-burmese`,20:`x-mac-khmer`,21:`x-mac-thai`,22:`x-mac-lao`,23:`x-mac-georgian`,24:`x-mac-armenian`,25:`x-mac-chinesesimp`,26:`x-mac-tibetan`,27:`x-mac-mongolian`,28:`x-mac-ethiopic`,29:`x-mac-ce`,30:`x-mac-vietnamese`,31:`x-mac-extarabic`},Ye={15:`x-mac-icelandic`,17:`x-mac-turkish`,18:`x-mac-croatian`,24:`x-mac-ce`,25:`x-mac-ce`,26:`x-mac-ce`,27:`x-mac-ce`,28:`x-mac-ce`,30:`x-mac-icelandic`,37:`x-mac-romanian`,38:`x-mac-ce`,39:`x-mac-ce`,40:`x-mac-ce`,143:`x-mac-inuit`,146:`x-mac-gaelic`};function Xe(e,t,n){switch(e){case 0:return qe;case 1:return Ye[n]||Je[t];case 3:if(t===1||t===10)return qe}}var Ze={0:`unicode`,1:`macintosh`,2:`reserved`,3:`windows`};function Qe(e){return Ze[e]}function $e(e,t,n){let r={},i=new G.Parser(e,t),a=i.parseUShort(),o=i.parseUShort(),s=i.offset+i.parseUShort();for(let t=0;t<o;t++){let t=i.parseUShort(),a=i.parseUShort(),o=i.parseUShort(),c=i.parseUShort(),l=He[c]||c,u=i.parseUShort(),d=i.parseUShort(),f=Ke(t,o,n),p=Xe(t,a,o),m=Qe(t);if(p!==void 0&&f!==void 0&&m!==void 0){let t;if(t=p===qe?me.UTF16(e,s+d,u):me.MACSTRING(e,s+d,u,p),t){let e=r[m];e===void 0&&(e=r[m]={});let n=e[l];n===void 0&&(n=e[l]={}),n[f]=t}}}return a===1&&i.parseUShort(),r}function K(e){let t={};for(let n in e)t[e[n]]=parseInt(n);return t}function et(e,t,n,r,i,a){return new U.Record(`NameRecord`,[{name:`platformID`,type:`USHORT`,value:e},{name:`encodingID`,type:`USHORT`,value:t},{name:`languageID`,type:`USHORT`,value:n},{name:`nameID`,type:`USHORT`,value:r},{name:`length`,type:`USHORT`,value:i},{name:`offset`,type:`USHORT`,value:a}])}function tt(e,t){let n=e.length,r=t.length-n+1;loop:for(let i=0;i<r;i++)for(;i<r;i++){for(let r=0;r<n;r++)if(t[i+r]!==e[r])continue loop;return i}return-1}function nt(e,t){let n=tt(e,t);if(n<0){n=t.length;let r=0,i=e.length;for(;r<i;++r)t.push(e[r])}return n}function rt(e,t){let n=K(Ze),r=K(Ue),i=K(Ge),a=[],o=[];for(let s in e){let c,l=[],u={},d=K(He),f=n[s];for(let t in e[s]){let n=d[t];if(n===void 0&&(n=t),c=parseInt(n),isNaN(c))throw Error(`Name table entry "`+t+`" does not exist, see nameTableNames for complete list.`);u[c]=e[s][t],l.push(c)}for(let e=0;e<l.length;e++){c=l[e];let n=u[c];for(let e in n){let s=n[e];if(f===1||f===0){let n=r[e],i=We[n],l=Xe(f,i,n),u=F.MACSTRING(s,l);if(f===0&&(n=t.indexOf(e),n<0&&(n=t.length,t.push(e)),i=4,u=F.UTF16(s)),u!==void 0){let e=nt(u,o);a.push(et(f,i,n,c,u.length,e))}}if(f===3){let t=i[e];if(t!==void 0){let e=F.UTF16(s),n=nt(e,o);a.push(et(3,1,t,c,e.length,n))}}}}}a.sort(function(e,t){return e.platformID-t.platformID||e.encodingID-t.encodingID||e.languageID-t.languageID||e.nameID-t.nameID});let s=new U.Table(`name`,[{name:`format`,type:`USHORT`,value:0},{name:`count`,type:`USHORT`,value:a.length},{name:`stringOffset`,type:`USHORT`,value:6+a.length*12}]);for(let e=0;e<a.length;e++)s.fields.push({name:`record_`+e,type:`RECORD`,value:a[e]});return s.fields.push({name:`strings`,type:`LITERAL`,value:o}),s}function it(e,t,n=[]){if(t<256&&t in He){if(n.length&&!n.includes(parseInt(t)))return;t=He[t]}for(let n in e)for(let r in e[n])if(r===t||parseInt(r)===t)return e[n][r]}var at={parse:$e,make:rt,getNameByID:it};function q(e,t,n,r){e.length=t.parseUShort(),e.language=t.parseUShort()-1;let i=t.parseByteList(e.length),a=Object.assign({},i),o=he[Xe(n,r,e.language)];for(let e=0;e<o.length;e++)a[o.charCodeAt(e)]=i[128+e];e.glyphIndexMap=a}function ot(e,t,n){t.parseUShort(),e.length=t.parseULong(),e.language=t.parseULong();let r;e.groupCount=r=t.parseULong(),e.glyphIndexMap={};for(let i=0;i<r;i+=1){let r=t.parseULong(),i=t.parseULong(),a=t.parseULong();for(let t=r;t<=i;t+=1)e.glyphIndexMap[t]=a,n===12&&a++}}function st(e,t,n,r,i){e.length=t.parseUShort(),e.language=t.parseUShort();let a;e.segCount=a=t.parseUShort()>>1,t.skip(`uShort`,3),e.glyphIndexMap={};let o=new G.Parser(n,r+i+14),s=new G.Parser(n,r+i+16+a*2),c=new G.Parser(n,r+i+16+a*4),l=new G.Parser(n,r+i+16+a*6),u=r+i+16+a*8;for(let t=0;t<a-1;t+=1){let t,r=o.parseUShort(),i=s.parseUShort(),a=c.parseShort(),d=l.parseUShort();for(let o=i;o<=r;o+=1)d===0?t=o+a&65535:(u=l.offset+l.relativeOffset-2,u+=d,u+=(o-i)*2,t=G.getUShort(n,u),t!==0&&(t=t+a&65535)),e.glyphIndexMap[o]=t}}function J(e,t){let n={};t.skip(`uLong`);let r=t.parseULong();for(let e=0;e<r;e+=1){let e=t.parseUInt24(),r={varSelector:e},i=t.parseOffset32(),a=t.parseOffset32(),o=t.relativeOffset;i&&(t.relativeOffset=i,r.defaultUVS=t.parseStruct({ranges:function(){return t.parseRecordList32({startUnicodeValue:t.parseUInt24,additionalCount:t.parseByte})}})),a&&(t.relativeOffset=a,r.nonDefaultUVS=t.parseStruct({uvsMappings:function(){let e={},n=t.parseRecordList32({unicodeValue:t.parseUInt24,glyphID:t.parseUShort});for(let t=0;t<n.length;t+=1)e[n[t].unicodeValue]=n[t];return e}})),n[e]=r,t.relativeOffset=o}e.varSelectorList=n}function ct(e,t){let n={};n.version=G.getUShort(e,t),P.argument(n.version===0,`cmap table version should be 0.`),n.numTables=G.getUShort(e,t+2);let r=null,i=-1,a=-1,o=null,s=null,c=[0,1,2,3,4,6],l=[0,1,10];for(let u=n.numTables-1;u>=0;--u)if(o=G.getUShort(e,t+4+u*8),s=G.getUShort(e,t+4+u*8+2),o===3&&l.includes(s)||o===0&&c.includes(s)||o===1&&s===0){if(a>0)continue;if(a=G.getULong(e,t+4+u*8+4),r)break}else if(o===0&&s===5){if(i=G.getULong(e,t+4+u*8+4),r=new G.Parser(e,t+i),r.parseUShort()!==14)i=-1,r=null;else if(a>0)break}if(a===-1)throw Error(`No valid cmap sub-tables found.`);let u=new G.Parser(e,t+a);if(n.format=u.parseUShort(),n.format===0)q(n,u,o,s);else if(n.format===12||n.format===13)ot(n,u,n.format);else if(n.format===4)st(n,u,e,t,a);else throw Error(`Only format 0 (platformId 1, encodingId 0), 4, 12 and 14 cmap tables are supported (found format `+n.format+`, platformId `+o+`, encodingId `+s+`).`);return r&&J(n,r),n}function lt(e,t,n){e.segments.push({end:t,start:t,delta:-(t-n),offset:0,glyphIndex:n})}function ut(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}function dt(e){if(e.length===0)return e;let t=[e[0]];for(let n=1;n<e.length;n++){let r=t[t.length-1],i=e[n];r.end+1===i.start&&r.delta===i.delta&&i.end!==65535?r.end=i.end:t.push(i)}return t}function ft(e){let t=!0,n;for(n=e.length-1;n>0;--n)if(e.get(n).unicode>65535){t=!1;break}let r=[{name:`version`,type:`USHORT`,value:0},{name:`numTables`,type:`USHORT`,value:t?1:2},{name:`platformID`,type:`USHORT`,value:3},{name:`encodingID`,type:`USHORT`,value:1},{name:`offset`,type:`ULONG`,value:t?12:20}];t||r.push({name:`cmap12PlatformID`,type:`USHORT`,value:3},{name:`cmap12EncodingID`,type:`USHORT`,value:10},{name:`cmap12Offset`,type:`ULONG`,value:0}),r.push({name:`format`,type:`USHORT`,value:4},{name:`cmap4Length`,type:`USHORT`,value:0},{name:`language`,type:`USHORT`,value:0},{name:`segCountX2`,type:`USHORT`,value:0},{name:`searchRange`,type:`USHORT`,value:0},{name:`entrySelector`,type:`USHORT`,value:0},{name:`rangeShift`,type:`USHORT`,value:0});let i=new U.Table(`cmap`,r);for(i.segments=[],n=0;n<e.length;n+=1){let t=e.get(n);for(let e=0;e<t.unicodes.length;e+=1)lt(i,t.unicodes[e],n)}i.segments.sort(function(e,t){return e.start-t.start}),i.segments=dt(i.segments),ut(i);let a=i.segments.length,o=0,s=[],c=[],l=[],u=[],d=[],f=[];for(n=0;n<a;n+=1){let e=i.segments[n];e.end<=65535&&e.start<=65535?(s.push({name:`end_`+n,type:`USHORT`,value:e.end}),c.push({name:`start_`+n,type:`USHORT`,value:e.start}),l.push({name:`idDelta_`+n,type:`SHORT`,value:e.delta}),u.push({name:`idRangeOffset_`+n,type:`USHORT`,value:e.offset}),e.glyphId!==void 0&&d.push({name:`glyph_`+n,type:`USHORT`,value:e.glyphId})):o+=1,!t&&e.glyphIndex!==void 0&&(f.push({name:`cmap12Start_`+n,type:`ULONG`,value:e.start}),f.push({name:`cmap12End_`+n,type:`ULONG`,value:e.end}),f.push({name:`cmap12Glyph_`+n,type:`ULONG`,value:e.glyphIndex}))}i.segCountX2=(a-o)*2,i.searchRange=2**Math.floor(Math.log(a-o)/Math.log(2))*2,i.entrySelector=Math.log(i.searchRange/2)/Math.log(2),i.rangeShift=i.segCountX2-i.searchRange;for(let e=0;e<s.length;e++)i.fields.push(s[e]);i.fields.push({name:`reservedPad`,type:`USHORT`,value:0});for(let e=0;e<c.length;e++)i.fields.push(c[e]);for(let e=0;e<l.length;e++)i.fields.push(l[e]);for(let e=0;e<u.length;e++)i.fields.push(u[e]);for(let e=0;e<d.length;e++)i.fields.push(d[e]);if(i.cmap4Length=14+s.length*2+2+c.length*2+l.length*2+u.length*2+d.length*2,!t){let e=16+f.length*4;i.cmap12Offset=20+i.cmap4Length,i.fields.push({name:`cmap12Format`,type:`USHORT`,value:12},{name:`cmap12Reserved`,type:`USHORT`,value:0},{name:`cmap12Length`,type:`ULONG`,value:e},{name:`cmap12Language`,type:`ULONG`,value:0},{name:`cmap12nGroups`,type:`ULONG`,value:f.length/3});for(let e=0;e<f.length;e++)i.fields.push(f[e])}return i}var pt={parse:ct,make:ft},mt=`.notdef,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quoteright,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,quoteleft,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,exclamdown,cent,sterling,fraction,yen,florin,section,currency,quotesingle,quotedblleft,guillemotleft,guilsinglleft,guilsinglright,fi,fl,endash,dagger,daggerdbl,periodcentered,paragraph,bullet,quotesinglbase,quotedblbase,quotedblright,guillemotright,ellipsis,perthousand,questiondown,grave,acute,circumflex,tilde,macron,breve,dotaccent,dieresis,ring,cedilla,hungarumlaut,ogonek,caron,emdash,AE,ordfeminine,Lslash,Oslash,OE,ordmasculine,ae,dotlessi,lslash,oslash,oe,germandbls,onesuperior,logicalnot,mu,trademark,Eth,onehalf,plusminus,Thorn,onequarter,divide,brokenbar,degree,thorn,threequarters,twosuperior,registered,minus,eth,multiply,threesuperior,copyright,Aacute,Acircumflex,Adieresis,Agrave,Aring,Atilde,Ccedilla,Eacute,Ecircumflex,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Ntilde,Oacute,Ocircumflex,Odieresis,Ograve,Otilde,Scaron,Uacute,Ucircumflex,Udieresis,Ugrave,Yacute,Ydieresis,Zcaron,aacute,acircumflex,adieresis,agrave,aring,atilde,ccedilla,eacute,ecircumflex,edieresis,egrave,iacute,icircumflex,idieresis,igrave,ntilde,oacute,ocircumflex,odieresis,ograve,otilde,scaron,uacute,ucircumflex,udieresis,ugrave,yacute,ydieresis,zcaron,exclamsmall,Hungarumlautsmall,dollaroldstyle,dollarsuperior,ampersandsmall,Acutesmall,parenleftsuperior,parenrightsuperior,266 ff,onedotenleader,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,commasuperior,threequartersemdash,periodsuperior,questionsmall,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,ffi,ffl,parenleftinferior,parenrightinferior,Circumflexsmall,hyphensuperior,Gravesmall,Asmall,Bsmall,Csmall,Dsmall,Esmall,Fsmall,Gsmall,Hsmall,Ismall,Jsmall,Ksmall,Lsmall,Msmall,Nsmall,Osmall,Psmall,Qsmall,Rsmall,Ssmall,Tsmall,Usmall,Vsmall,Wsmall,Xsmall,Ysmall,Zsmall,colonmonetary,onefitted,rupiah,Tildesmall,exclamdownsmall,centoldstyle,Lslashsmall,Scaronsmall,Zcaronsmall,Dieresissmall,Brevesmall,Caronsmall,Dotaccentsmall,Macronsmall,figuredash,hypheninferior,Ogoneksmall,Ringsmall,Cedillasmall,questiondownsmall,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior,Agravesmall,Aacutesmall,Acircumflexsmall,Atildesmall,Adieresissmall,Aringsmall,AEsmall,Ccedillasmall,Egravesmall,Eacutesmall,Ecircumflexsmall,Edieresissmall,Igravesmall,Iacutesmall,Icircumflexsmall,Idieresissmall,Ethsmall,Ntildesmall,Ogravesmall,Oacutesmall,Ocircumflexsmall,Otildesmall,Odieresissmall,OEsmall,Oslashsmall,Ugravesmall,Uacutesmall,Ucircumflexsmall,Udieresissmall,Yacutesmall,Thornsmall,Ydieresissmall,001.000,001.001,001.002,001.003,Black,Bold,Book,Light,Medium,Regular,Roman,Semibold`.split(`,`),ht=`.notdef,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quoteright,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,quoteleft,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,exclamdown,cent,sterling,fraction,yen,florin,section,currency,quotesingle,quotedblleft,guillemotleft,guilsinglleft,guilsinglright,fi,fl,endash,dagger,daggerdbl,periodcentered,paragraph,bullet,quotesinglbase,quotedblbase,quotedblright,guillemotright,ellipsis,perthousand,questiondown,grave,acute,circumflex,tilde,macron,breve,dotaccent,dieresis,ring,cedilla,hungarumlaut,ogonek,caron,emdash,AE,ordfeminine,Lslash,Oslash,OE,ordmasculine,ae,dotlessi,lslash,oslash,oe,germandbls,onesuperior,logicalnot,mu,trademark,Eth,onehalf,plusminus,Thorn,onequarter,divide,brokenbar,degree,thorn,threequarters,twosuperior,registered,minus,eth,multiply,threesuperior,copyright,Aacute,Acircumflex,Adieresis,Agrave,Aring,Atilde,Ccedilla,Eacute,Ecircumflex,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Ntilde,Oacute,Ocircumflex,Odieresis,Ograve,Otilde,Scaron,Uacute,Ucircumflex,Udieresis,Ugrave,Yacute,Ydieresis,Zcaron,aacute,acircumflex,adieresis,agrave,aring,atilde,ccedilla,eacute,ecircumflex,edieresis,egrave,iacute,icircumflex,idieresis,igrave,ntilde,oacute,ocircumflex,odieresis,ograve,otilde,scaron,uacute,ucircumflex,udieresis,ugrave,yacute,ydieresis,zcaron`.split(`,`),gt=`.notdef,space,exclamsmall,Hungarumlautsmall,dollaroldstyle,dollarsuperior,ampersandsmall,Acutesmall,parenleftsuperior,parenrightsuperior,twodotenleader,onedotenleader,comma,hyphen,period,fraction,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,colon,semicolon,commasuperior,threequartersemdash,periodsuperior,questionsmall,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,fi,fl,ffi,ffl,parenleftinferior,parenrightinferior,Circumflexsmall,hyphensuperior,Gravesmall,Asmall,Bsmall,Csmall,Dsmall,Esmall,Fsmall,Gsmall,Hsmall,Ismall,Jsmall,Ksmall,Lsmall,Msmall,Nsmall,Osmall,Psmall,Qsmall,Rsmall,Ssmall,Tsmall,Usmall,Vsmall,Wsmall,Xsmall,Ysmall,Zsmall,colonmonetary,onefitted,rupiah,Tildesmall,exclamdownsmall,centoldstyle,Lslashsmall,Scaronsmall,Zcaronsmall,Dieresissmall,Brevesmall,Caronsmall,Dotaccentsmall,Macronsmall,figuredash,hypheninferior,Ogoneksmall,Ringsmall,Cedillasmall,onequarter,onehalf,threequarters,questiondownsmall,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,onesuperior,twosuperior,threesuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior,Agravesmall,Aacutesmall,Acircumflexsmall,Atildesmall,Adieresissmall,Aringsmall,AEsmall,Ccedillasmall,Egravesmall,Eacutesmall,Ecircumflexsmall,Edieresissmall,Igravesmall,Iacutesmall,Icircumflexsmall,Idieresissmall,Ethsmall,Ntildesmall,Ogravesmall,Oacutesmall,Ocircumflexsmall,Otildesmall,Odieresissmall,OEsmall,Oslashsmall,Ugravesmall,Uacutesmall,Ucircumflexsmall,Udieresissmall,Yacutesmall,Thornsmall,Ydieresissmall`.split(`,`),_t=`.notdef,space,dollaroldstyle,dollarsuperior,parenleftsuperior,parenrightsuperior,twodotenleader,onedotenleader,comma,hyphen,period,fraction,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,colon,semicolon,commasuperior,threequartersemdash,periodsuperior,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,fi,fl,ffi,ffl,parenleftinferior,parenrightinferior,hyphensuperior,colonmonetary,onefitted,rupiah,centoldstyle,figuredash,hypheninferior,onequarter,onehalf,threequarters,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,onesuperior,twosuperior,threesuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior`.split(`,`),vt=`................................space.exclam.quotedbl.numbersign.dollar.percent.ampersand.quoteright.parenleft.parenright.asterisk.plus.comma.hyphen.period.slash.zero.one.two.three.four.five.six.seven.eight.nine.colon.semicolon.less.equal.greater.question.at.A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.bracketleft.backslash.bracketright.asciicircum.underscore.quoteleft.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.braceleft.bar.braceright.asciitilde...................................exclamdown.cent.sterling.fraction.yen.florin.section.currency.quotesingle.quotedblleft.guillemotleft.guilsinglleft.guilsinglright.fi.fl..endash.dagger.daggerdbl.periodcentered..paragraph.bullet.quotesinglbase.quotedblbase.quotedblright.guillemotright.ellipsis.perthousand..questiondown..grave.acute.circumflex.tilde.macron.breve.dotaccent.dieresis..ring.cedilla..hungarumlaut.ogonek.caron.emdash.................AE..ordfeminine.....Lslash.Oslash.OE.ordmasculine......ae....dotlessi...lslash.oslash.oe.germandbls`.split(`.`),yt=`................................space.exclamsmall.Hungarumlautsmall..dollaroldstyle.dollarsuperior.ampersandsmall.Acutesmall.parenleftsuperior.parenrightsuperior.twodotenleader.onedotenleader.comma.hyphen.period.fraction.zerooldstyle.oneoldstyle.twooldstyle.threeoldstyle.fouroldstyle.fiveoldstyle.sixoldstyle.sevenoldstyle.eightoldstyle.nineoldstyle.colon.semicolon.commasuperior.threequartersemdash.periodsuperior.questionsmall..asuperior.bsuperior.centsuperior.dsuperior.esuperior...isuperior...lsuperior.msuperior.nsuperior.osuperior...rsuperior.ssuperior.tsuperior..ff.fi.fl.ffi.ffl.parenleftinferior..parenrightinferior.Circumflexsmall.hyphensuperior.Gravesmall.Asmall.Bsmall.Csmall.Dsmall.Esmall.Fsmall.Gsmall.Hsmall.Ismall.Jsmall.Ksmall.Lsmall.Msmall.Nsmall.Osmall.Psmall.Qsmall.Rsmall.Ssmall.Tsmall.Usmall.Vsmall.Wsmall.Xsmall.Ysmall.Zsmall.colonmonetary.onefitted.rupiah.Tildesmall...................................exclamdownsmall.centoldstyle.Lslashsmall...Scaronsmall.Zcaronsmall.Dieresissmall.Brevesmall.Caronsmall..Dotaccentsmall...Macronsmall...figuredash.hypheninferior...Ogoneksmall.Ringsmall.Cedillasmall....onequarter.onehalf.threequarters.questiondownsmall.oneeighth.threeeighths.fiveeighths.seveneighths.onethird.twothirds...zerosuperior.onesuperior.twosuperior.threesuperior.foursuperior.fivesuperior.sixsuperior.sevensuperior.eightsuperior.ninesuperior.zeroinferior.oneinferior.twoinferior.threeinferior.fourinferior.fiveinferior.sixinferior.seveninferior.eightinferior.nineinferior.centinferior.dollarinferior.periodinferior.commainferior.Agravesmall.Aacutesmall.Acircumflexsmall.Atildesmall.Adieresissmall.Aringsmall.AEsmall.Ccedillasmall.Egravesmall.Eacutesmall.Ecircumflexsmall.Edieresissmall.Igravesmall.Iacutesmall.Icircumflexsmall.Idieresissmall.Ethsmall.Ntildesmall.Ogravesmall.Oacutesmall.Ocircumflexsmall.Otildesmall.Odieresissmall.OEsmall.Oslashsmall.Ugravesmall.Uacutesmall.Ucircumflexsmall.Udieresissmall.Yacutesmall.Thornsmall.Ydieresissmall`.split(`.`),Y=`.notdef,.null,nonmarkingreturn,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quotesingle,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,grave,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,Adieresis,Aring,Ccedilla,Eacute,Ntilde,Odieresis,Udieresis,aacute,agrave,acircumflex,adieresis,atilde,aring,ccedilla,eacute,egrave,ecircumflex,edieresis,iacute,igrave,icircumflex,idieresis,ntilde,oacute,ograve,ocircumflex,odieresis,otilde,uacute,ugrave,ucircumflex,udieresis,dagger,degree,cent,sterling,section,bullet,paragraph,germandbls,registered,copyright,trademark,acute,dieresis,notequal,AE,Oslash,infinity,plusminus,lessequal,greaterequal,yen,mu,partialdiff,summation,product,pi,integral,ordfeminine,ordmasculine,Omega,ae,oslash,questiondown,exclamdown,logicalnot,radical,florin,approxequal,Delta,guillemotleft,guillemotright,ellipsis,nonbreakingspace,Agrave,Atilde,Otilde,OE,oe,endash,emdash,quotedblleft,quotedblright,quoteleft,quoteright,divide,lozenge,ydieresis,Ydieresis,fraction,currency,guilsinglleft,guilsinglright,fi,fl,daggerdbl,periodcentered,quotesinglbase,quotedblbase,perthousand,Acircumflex,Ecircumflex,Aacute,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Oacute,Ocircumflex,apple,Ograve,Uacute,Ucircumflex,Ugrave,dotlessi,circumflex,tilde,macron,breve,dotaccent,ring,cedilla,hungarumlaut,ogonek,caron,Lslash,lslash,Scaron,scaron,Zcaron,zcaron,brokenbar,Eth,eth,Yacute,yacute,Thorn,thorn,minus,multiply,onesuperior,twosuperior,threesuperior,onehalf,onequarter,threequarters,franc,Gbreve,gbreve,Idotaccent,Scedilla,scedilla,Cacute,cacute,Ccaron,ccaron,dcroat`.split(`,`);function bt(e){this.font=e}bt.prototype.charToGlyphIndex=function(e){let t=e.codePointAt(0),n=this.font.glyphs;if(n)for(let e=0;e<n.length;e+=1){let r=n.get(e);for(let n=0;n<r.unicodes.length;n+=1)if(r.unicodes[n]===t)return e}return null};function xt(e){this.cmap=e}xt.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.codePointAt(0)]||0};function St(e,t){this.encoding=e,this.charset=t}St.prototype.charToGlyphIndex=function(e){let t=e.codePointAt(0),n=this.encoding[t];return this.charset.indexOf(n)};function Ct(e){switch(e.version){case 1:this.names=Y.slice();break;case 2:this.names=Array(e.numberOfGlyphs);for(let t=0;t<e.numberOfGlyphs;t++)e.glyphNameIndex[t]<Y.length?this.names[t]=Y[e.glyphNameIndex[t]]:this.names[t]=e.names[e.glyphNameIndex[t]-Y.length];break;case 2.5:this.names=Array(e.numberOfGlyphs);for(let t=0;t<e.numberOfGlyphs;t++)this.names[t]=Y[t+e.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[]}}Ct.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)},Ct.prototype.glyphIndexToName=function(e){return this.names[e]};function wt(e){let t,n=e.tables.cmap.glyphIndexMap,r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i],o=n[a];t=e.glyphs.get(o),t.addUnicode(parseInt(a))}for(let n=0;n<e.glyphs.length;n+=1)t=e.glyphs.get(n),e.cffEncoding?t.name=e.cffEncoding.charset[n]:e.glyphNames.names&&(t.name=e.glyphNames.glyphIndexToName(n))}function Tt(e){e._IndexToUnicodeMap={};let t=e.tables.cmap.glyphIndexMap,n=Object.keys(t);for(let r=0;r<n.length;r+=1){let i=n[r],a=t[i];e._IndexToUnicodeMap[a]===void 0?e._IndexToUnicodeMap[a]={unicodes:[parseInt(i)]}:e._IndexToUnicodeMap[a].unicodes.push(parseInt(i))}}function Et(e,t){t.lowMemory?Tt(e):wt(e)}function Dt(e,t,n,r,i){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke()}var Ot={line:Dt};function kt(e,t){let n=new W(e,t),r=n.parseShort();r!==0&&console.warn(`Only CPALv0 is currently fully supported.`);let i=n.parseShort(),a=n.parseShort(),o=n.parseShort(),s=n.parseOffset32(),c=n.parseUShortList(a);n.relativeOffset=s;let l=n.parseULongList(o);return n.relativeOffset=s,{version:r,numPaletteEntries:i,colorRecords:l,colorRecordIndices:c}}function At({version:e=0,numPaletteEntries:t=0,colorRecords:n=[],colorRecordIndices:r=[0]}){return P.argument(e===0,`Only CPALv0 are supported.`),P.argument(n.length,`No colorRecords given.`),P.argument(r.length,`No colorRecordIndices given.`),r.length>1&&P.argument(t,`Can't infer numPaletteEntries on multiple colorRecordIndices`),new U.Table(`CPAL`,[{name:`version`,type:`USHORT`,value:e},{name:`numPaletteEntries`,type:`USHORT`,value:t||n.length},{name:`numPalettes`,type:`USHORT`,value:r.length},{name:`numColorRecords`,type:`USHORT`,value:n.length},{name:`colorRecordsArrayOffset`,type:`ULONG`,value:12+2*r.length},...r.map((e,t)=>({name:`colorRecordIndices_`+t,type:`USHORT`,value:e})),...n.map((e,t)=>({name:`colorRecords_`+t,type:`ULONG`,value:e}))])}function jt(e){var t=(e&4278190080)>>24,n=(e&16711680)>>16,r=(e&65280)>>8,i=e&255;return t=t+256&255,n=n+256&255,r=r+256&255,i=(i+256&255)/255,{b:t,g:n,r,a:i}}function Mt(e,t,n=0,r=`hexa`){if(t==65535)return`currentColor`;let i=e&&e.tables&&e.tables.cpal;if(!i)return`currentColor`;if(n>i.colorRecordIndices.length-1)throw Error(`Palette index out of range (colorRecordIndices.length: ${i.colorRecordIndices.length}, index: ${t})`);if(t>i.numPaletteEntries)throw Error(`Color index out of range (numPaletteEntries: ${i.numPaletteEntries}, index: ${t})`);let a=i.colorRecordIndices[n]+t;if(a>i.colorRecords)throw Error(`Color index out of range (colorRecords.length: ${i.colorRecords.length}, lookupIndex: ${a})`);let o=jt(i.colorRecords[a]);return r===`bgra`?o:Rt(o,r)}function Nt(e){return(`0`+parseInt(e).toString(16)).slice(-2)}function Pt(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o,s,c=(i+a)/2;if(i===a)o=s=0;else{let e=i-a;switch(s=c>.5?e/(2-i-a):e/(i+a),i){case t:o=(n-r)/e+(n<r?6:0);break;case n:o=(r-t)/e+2;break;case r:o=(t-n)/e+4}o/=6}return{h:o*360,s:s*100,l:c*100}}function Ft(e){let{h:t,s:n,l:r,a:i}=e;t%=360,n/=100,r/=100;let a=(1-Math.abs(2*r-1))*n,o=a*(1-Math.abs(t/60%2-1)),s=r-a/2,c=0,l=0,u=0;return 0<=t&&t<60?(c=a,l=o,u=0):60<=t&&t<120?(c=o,l=a,u=0):120<=t&&t<180?(c=0,l=a,u=o):180<=t&&t<240?(c=0,l=o,u=a):240<=t&&t<300?(c=o,l=0,u=a):300<=t&&t<=360&&(c=a,l=0,u=o),{r:Math.round((c+s)*255),g:Math.round((l+s)*255),b:Math.round((u+s)*255),a:i}}function It(e){return parseInt(`0x${Nt(e.b)}${Nt(e.g)}${Nt(e.r)}${Nt(e.a*255)}`,16)}function Lt(e,t=`hexa`){let n=t==`raw`||t==`cpal`,r=Number.isInteger(e),i=!0;if(r&&n||e===`currentColor`)return e;if(typeof e==`object`){if(t==`bgra`)return e;if(n)return It(e)}else if(!r&&/^#([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(e.trim())){switch(e=e.trim().substring(1),e.length){case 3:e={r:parseInt(e[0].repeat(2),16),g:parseInt(e[1].repeat(2),16),b:parseInt(e[2].repeat(2),16),a:1};break;case 4:e={r:parseInt(e[0].repeat(2),16),g:parseInt(e[1].repeat(2),16),b:parseInt(e[2].repeat(2),16),a:parseInt(e[3].repeat(2),16)/255};break;case 6:e={r:parseInt(e[0]+e[1],16),g:parseInt(e[2]+e[3],16),b:parseInt(e[4]+e[5],16),a:1};break;case 8:e={r:parseInt(e[0]+e[1],16),g:parseInt(e[2]+e[3],16),b:parseInt(e[4]+e[5],16),a:parseInt(e[6]+e[7],16)/255}}if(t==`bgra`)return e}else if(typeof document<`u`&&/^[a-z]+$/i.test(e)){let t=document.createElement(`canvas`).getContext(`2d`);t.fillStyle=e;let n=Rt(t.fillStyle,`hexa`);n===`#000000ff`&&e.toLowerCase()!==`black`?i=!1:e=n}else{e=e.trim();let t=/rgba?\(\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(t.test(e)){let n=e.match(t).filter(e=>e!==void 0);e={r:Math.round(parseFloat(n[1])/(n[2]?100/255:1)),g:Math.round(parseFloat(n[3])/(n[4]?100/255:1)),b:Math.round(parseFloat(n[5])/(n[6]?100/255:1)),a:n[7]?parseFloat(n[7])/(n[8]?100:1):1}}else{let t=/hsla?\(\s*(?:(\d*\.\d+|\d+)(deg|turn|))\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(t.test(e)){let n=e.match(t).filter(e=>e!==void 0);e=Ft({h:parseFloat(n[1])*(n[2]===`turn`?360:1),s:parseFloat(n[3]),l:parseFloat(n[4]),a:n[5]?parseFloat(n[5])/(n[6]?100:1):1})}else i=!1}}if(!i)throw Error(`Invalid color format: ${e}`);return Rt(e,t)}function Rt(e,t=`hexa`){if(e===`currentColor`)return e;if(Number.isInteger(e)){if(t==`raw`||t==`cpal`)return e;e=jt(e)}else typeof e!=`object`&&(e=Lt(e,`bgra`));let n=[`hsl`,`hsla`].includes(t)?Pt(e):null;switch(t){case`rgba`:return`rgba(${e.r}, ${e.g}, ${e.b}, ${parseFloat(e.a.toFixed(3))})`;case`rgb`:return`rgb(${e.r}, ${e.g}, ${e.b})`;case`hex`:case`hex6`:case`hex-6`:return`#${Nt(e.r)}${Nt(e.g)}${Nt(e.b)}`;case`hexa`:case`hex8`:case`hex-8`:return`#${Nt(e.r)}${Nt(e.g)}${Nt(e.b)}${Nt(e.a*255)}`;case`hsl`:return`hsl(${n.h.toFixed(2)}, ${n.s.toFixed(2)}%, ${n.l.toFixed(2)}%)`;case`hsla`:return`hsla(${n.h.toFixed(2)}, ${n.s.toFixed(2)}%, ${n.l.toFixed(2)}%, ${parseFloat(e.a.toFixed(3))})`;case`bgra`:return e;case`raw`:case`cpal`:return It(e);default:throw Error(`Unknown color format: `+t)}}var zt={parse:kt,make:At,getPaletteColor:Mt,parseColor:Lt,formatColor:Rt};function Bt(e,t){let n=t||new se;return{configurable:!0,get:function(){return typeof n==`function`&&(n=n()),n},set:function(e){n=e}}}function Vt(e){this.bindConstructorValues(e)}Vt.prototype.bindConstructorValues=function(e){if(this.index=e.index||0,e.name===`.notdef`?e.unicode=void 0:e.name===`.null`&&(e.unicode=0),e.unicode===0&&e.name!==`.null`)throw Error(`The unicode value "0" is reserved for the glyph name ".null" and cannot be used by any other glyph.`);this.name=e.name||null,this.unicode=e.unicode,this.unicodes=e.unicodes||(e.unicode===void 0?[]:[e.unicode]),`xMin`in e&&(this.xMin=e.xMin),`yMin`in e&&(this.yMin=e.yMin),`xMax`in e&&(this.xMax=e.xMax),`yMax`in e&&(this.yMax=e.yMax),`advanceWidth`in e&&(this.advanceWidth=e.advanceWidth),`leftSideBearing`in e&&(this.leftSideBearing=e.leftSideBearing),`points`in e&&(this.points=e.points),Object.defineProperty(this,"path",Bt(this,e.path))},Vt.prototype.addUnicode=function(e){this.unicodes.length===0&&(this.unicode=e),this.unicodes.push(e)},Vt.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},Vt.prototype.getPath=function(e,t,n,r,i){e=e===void 0?0:e,t=t===void 0?0:t,n=n===void 0?72:n,r=Object.assign({},i&&i.defaultRenderOptions,r);let a,o,s=r.xScale,c=r.yScale,l=1/(this.path.unitsPerEm||1e3)*n,u=this;i&&i.variation&&(u=i.variation.getTransform(this,r.variation),a=u.path.commands),r.hinting&&i&&i.hinting&&(o=u.path&&i.hinting.exec(u,n,r)),o?(a=i.hinting.getCommands(o),e=Math.round(e),t=Math.round(t),s=c=1):(a=u.path.commands,s===void 0&&(s=l),c===void 0&&(c=l));let d=new se;if(r.drawSVG){let n=this.getSvgImage(i);if(n){let r=new se;return r._image={image:n.image,x:e+n.leftSideBearing*l,y:t-n.baseline*l,width:n.image.width*l,height:n.image.height*l},d._layers=[r],d}}if(r.drawLayers){let a=this.getLayers(i);if(a&&a.length){d._layers=[];for(let o=0;o<a.length;o+=1){let s=a[o],c=Mt(i,s.paletteIndex,r.usePalette);c=c===`currentColor`?r.fill||`black`:Rt(c,r.colorFormat||`rgba`),r=Object.assign({},r,{fill:c}),d._layers.push(this.getPath.call(s.glyph,e,t,n,r,i))}return d}}d.fill=r.fill||this.path.fill,d.stroke=this.path.stroke,d.strokeWidth=this.path.strokeWidth*l;for(let n=0;n<a.length;n+=1){let r=a[n];r.type===`M`?d.moveTo(e+r.x*s,t+-r.y*c):r.type===`L`?d.lineTo(e+r.x*s,t+-r.y*c):r.type===`Q`?d.quadraticCurveTo(e+r.x1*s,t+-r.y1*c,e+r.x*s,t+-r.y*c):r.type===`C`?d.curveTo(e+r.x1*s,t+-r.y1*c,e+r.x2*s,t+-r.y2*c,e+r.x*s,t+-r.y*c):r.type===`Z`&&d.stroke&&d.strokeWidth&&d.closePath()}return d},Vt.prototype.getLayers=function(e){if(!e)throw Error(`The font object is required to read the colr/cpal tables in order to get the layers.`);return e.layers.get(this.index)},Vt.prototype.getSvgImage=function(e){if(!e)throw Error(`The font object is required to read the svg table in order to get the image.`);return e.svgImages.get(this.index)},Vt.prototype.getContours=function(e=null){if(this.points===void 0&&!e)return[];let t=[],n=[],r=e||this.points;for(let e=0;e<r.length;e+=1){let i=r[e];n.push(i),i.lastPointOfContour&&(t.push(n),n=[])}return P.argument(n.length===0,`There are still points left in the current contour.`),t},Vt.prototype.getMetrics=function(){let e=this.path.commands,t=[],n=[];for(let r=0;r<e.length;r+=1){let i=e[r];i.type!==`Z`&&(t.push(i.x),n.push(i.y)),(i.type===`Q`||i.type===`C`)&&(t.push(i.x1),n.push(i.y1)),i.type===`C`&&(t.push(i.x2),n.push(i.y2))}let r={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,t),yMax:Math.max.apply(null,n),leftSideBearing:this.leftSideBearing};return isFinite(r.xMin)||(r.xMin=0),isFinite(r.xMax)||(r.xMax=this.advanceWidth),isFinite(r.yMin)||(r.yMin=0),isFinite(r.yMax)||(r.yMax=0),r.rightSideBearing=this.advanceWidth-r.leftSideBearing-(r.xMax-r.xMin),r},Vt.prototype.draw=function(e,t,n,r,i,a){i=Object.assign({},a&&a.defaultRenderOptions,i),this.getPath(t,n,r,i,a).draw(e)},Vt.prototype.drawPoints=function(e,t,n,r,i,a){if(i=Object.assign({},a&&a.defaultRenderOptions,i),i.drawLayers){let i=this.getLayers(a);if(i&&i.length){for(let a=0;a<i.length;a+=1)i[a].glyph.index!==this.index&&this.drawPoints.call(i[a].glyph,e,t,n,r);return}}function o(t,n,r,i){e.beginPath();for(let a=0;a<t.length;a+=1)e.moveTo(n+t[a].x*i,r+t[a].y*i),e.arc(n+t[a].x*i,r+t[a].y*i,2,0,Math.PI*2,!1);e.fill()}t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?24:r;let s=1/this.path.unitsPerEm*r,c=[],l=[],u=this.path.commands;a&&a.variation&&(u=a.variation.getTransform(this,i.variation).path.commands);for(let e=0;e<u.length;e+=1){let t=u[e];t.x!==void 0&&c.push({x:t.x,y:-t.y}),t.x1!==void 0&&l.push({x:t.x1,y:-t.y1}),t.x2!==void 0&&l.push({x:t.x2,y:-t.y2})}e.fillStyle=`blue`,o(c,t,n,s),e.fillStyle=`red`,o(l,t,n,s)},Vt.prototype.drawMetrics=function(e,t,n,r){let i;t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?24:r,i=1/this.path.unitsPerEm*r,e.lineWidth=1,e.strokeStyle=`black`,Ot.line(e,t,-1e4,t,1e4),Ot.line(e,-1e4,n,1e4,n);let a=this.xMin||0,o=this.yMin||0,s=this.xMax||0,c=this.yMax||0,l=this.advanceWidth||0;e.strokeStyle=`blue`,Ot.line(e,t+a*i,-1e4,t+a*i,1e4),Ot.line(e,t+s*i,-1e4,t+s*i,1e4),Ot.line(e,-1e4,n+-o*i,1e4,n+-o*i),Ot.line(e,-1e4,n+-c*i,1e4,n+-c*i),e.strokeStyle=`green`,Ot.line(e,t+l*i,-1e4,t+l*i,1e4)},Vt.prototype.toPathData=function(e,t){e=Object.assign({},{variation:t&&t.defaultRenderOptions.variation},e);let n=this;t&&t.variation&&(n=t.variation.getTransform(this,e.variation));let r=n.points&&e.pointsTransform?e.pointsTransform(n.points):n.path;return e.pathTransform&&(r=e.pathTransform(r)),r.toPathData(e)},Vt.prototype.fromSVG=function(e,t={}){return this.path.fromSVG(e,t)},Vt.prototype.toSVG=function(e,t){let n=this.toPathData.apply(this,[e,t]);return this.path.toSVG(e,n)},Vt.prototype.toDOMElement=function(e,t){e=Object.assign({},{variation:t&&t.defaultRenderOptions.variation},e);let n=this.path;return t&&t.variation&&(n=t.variation.getTransform(this,e.variation).path),n.toDOMElement(e)};var Ht=Vt;function Ut(e,t,n){Object.defineProperty(e,t,{get:function(){return e[n]===void 0&&e.path,e[n]},set:function(t){e[n]=t},enumerable:!0,configurable:!0})}function Wt(e,t){if(this.font=e,this.glyphs={},Array.isArray(t))for(let n=0;n<t.length;n++){let r=t[n];r.path.unitsPerEm=e.unitsPerEm,this.glyphs[n]=r}this.length=t&&t.length||0}typeof Symbol<`u`&&Symbol.iterator&&(Wt.prototype[Symbol.iterator]=function(){let e=-1;return{next:function(){e++;let t=e>=this.length-1;return{value:this.get(e),done:t}}.bind(this)}}),Wt.prototype.get=function(e){if(this.font._push&&this.glyphs[e]===void 0){this.font._push(e),typeof this.glyphs[e]==`function`&&(this.glyphs[e]=this.glyphs[e]());let t=this.glyphs[e],n=this.font._IndexToUnicodeMap[e];if(n)for(let e=0;e<n.unicodes.length;e++)t.addUnicode(n.unicodes[e]);this.font.cffEncoding?t.name=this.font.cffEncoding.charset[e]:this.font.glyphNames.names&&(t.name=this.font.glyphNames.glyphIndexToName(e)),this.glyphs[e].advanceWidth=this.font._hmtxTableData[e].advanceWidth,this.glyphs[e].leftSideBearing=this.font._hmtxTableData[e].leftSideBearing}else typeof this.glyphs[e]==`function`&&(this.glyphs[e]=this.glyphs[e]());return this.glyphs[e]},Wt.prototype.push=function(e,t){this.glyphs[e]=t,this.length++};function Gt(e,t){return new Ht({index:t,font:e})}function Kt(e,t,n,r,i,a){return function(){let o=new Ht({index:t,font:e});return o.path=function(){n(o,r,i);let t=a(e.glyphs,o);return t.unitsPerEm=e.unitsPerEm,t},Ut(o,`numberOfContours`,`_numberOfContours`),Ut(o,`xMin`,`_xMin`),Ut(o,`xMax`,`_xMax`),Ut(o,`yMin`,`_yMin`),Ut(o,`yMax`,`_yMax`),Ut(o,`points`,`_points`),o}}function qt(e,t,n,r,i){return function(){let a=new Ht({index:t,font:e});return a.path=function(){let t=n(e,a,r,i);return t.unitsPerEm=e.unitsPerEm,t},a}}var Jt={GlyphSet:Wt,glyphLoader:Gt,ttfGlyphLoader:Kt,cffGlyphLoader:qt};function Yt(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!Yt(e[n],t[n]))return!1;return!0}return!1}var Xt=10;function Zt(e){let t;return t=e.length<1240?107:e.length<33900?1131:32768,t}function Qt(e,t,n,r){let i=[],a=[],o=r>1?G.getULong(e,t):G.getCard16(e,t),s=r>1?4:2,c,l;if(o!==0){let n=G.getByte(e,t+s);c=t+(o+1)*n+s;let r=t+s+1;for(let t=0;t<o+1;t+=1)i.push(G.getOffset(e,r,n)),r+=n;l=c+i[o]}else l=t+s;for(let o=0;o<i.length-1;o+=1){let s=G.getBytes(e,c+i[o],c+i[o+1]);n&&(s=n(s,e,t,r)),a.push(s)}return{objects:a,startOffset:t,endOffset:l}}function $t(e,t,n){let r=[],i=n>1?G.getULong(e,t):G.getCard16(e,t),a=n>1?4:2,o,s;if(i!==0){let n=G.getByte(e,t+a);o=t+(i+1)*n+a;let c=t+a+1;for(let t=0;t<i+1;t+=1)r.push(G.getOffset(e,c,n)),c+=n;s=o+r[i]}else s=t+a;return{offsets:r,startOffset:t,endOffset:s}}function en(e,t,n,r,i,a){let o=a>1?G.getULong(n,r):G.getCard16(n,r),s=a>1?4:2,c=0;if(o!==0){let e=G.getByte(n,r+s);c=r+(o+1)*e+s}let l=G.getBytes(n,c+t[e],c+t[e+1]);return i&&(l=i(l)),l}function tn(e){let t=``,n=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`.`,`E`,`E-`,null,`-`];for(;;){let r=e.parseByte(),i=r>>4,a=r&15;if(i===15||(t+=n[i],a===15))break;t+=n[a]}return parseFloat(t)}function nn(e,t){let n,r,i,a;if(t===28)return n=e.parseByte(),r=e.parseByte(),n<<8|r;if(t===29)return n=e.parseByte(),r=e.parseByte(),i=e.parseByte(),a=e.parseByte(),n<<24|r<<16|i<<8|a;if(t===30)return tn(e);if(t>=32&&t<=246)return t-139;if(t>=247&&t<=250)return n=e.parseByte(),(t-247)*256+n+108;if(t>=251&&t<=254)return n=e.parseByte(),-(t-251)*256-n-108;throw Error(`Invalid b0 `+t)}function rn(e){let t={};for(let n=0;n<e.length;n+=1){let r=e[n][0],i=e[n][1],a;if(a=i.length===1?i[0]:i,Object.prototype.hasOwnProperty.call(t,r)&&!isNaN(t[r]))throw Error(`Object `+t+` already has key `+r);t[r]=a}return t}function an(e,t,n,r){t=t===void 0?0:t;let i=new G.Parser(e,t),a=[],o=[];n=n===void 0?e.byteLength:n;let s=r<2?22:28;for(;i.relativeOffset<n;){let e=i.parseByte();if(e<s){if(e===12&&(e=1200+i.parseByte()),r>1&&e===23){xn(o);continue}a.push([e,o]),o=[]}else o.push(nn(i,e,r))}return rn(a)}function on(e,t){return t=t<=390?mt[t]:e?e[t-391]:void 0,t}function sn(e,t,n){let r={},i;for(let a=0;a<t.length;a+=1){let o=t[a];if(Array.isArray(o.type)){let t=[];t.length=o.type.length;for(let r=0;r<o.type.length;r++)i=e[o.op]===void 0?void 0:e[o.op][r],i===void 0&&(i=o.value!==void 0&&o.value[r]!==void 0?o.value[r]:null),o.type[r]===`SID`&&(i=on(n,i)),t[r]=i;r[o.name]=t}else i=e[o.op],i===void 0&&(i=o.value===void 0?null:o.value),o.type===`SID`&&(i=on(n,i)),r[o.name]=i}return r}function cn(e,t){let n={};if(n.formatMajor=G.getCard8(e,t),n.formatMinor=G.getCard8(e,t+1),n.formatMajor>2)throw Error(`Unsupported CFF table version ${n.formatMajor}.${n.formatMinor}`);return n.size=G.getCard8(e,t+2),n.formatMajor<2?(n.offsetSize=G.getCard8(e,t+3),n.startOffset=t,n.endOffset=t+4):(n.topDictLength=G.getCard16(e,t+3),n.endOffset=t+8),n}var ln=[{name:`version`,op:0,type:`SID`},{name:`notice`,op:1,type:`SID`},{name:`copyright`,op:1200,type:`SID`},{name:`fullName`,op:2,type:`SID`},{name:`familyName`,op:3,type:`SID`},{name:`weight`,op:4,type:`SID`},{name:`isFixedPitch`,op:1201,type:`number`,value:0},{name:`italicAngle`,op:1202,type:`number`,value:0},{name:`underlinePosition`,op:1203,type:`number`,value:-100},{name:`underlineThickness`,op:1204,type:`number`,value:50},{name:`paintType`,op:1205,type:`number`,value:0},{name:`charstringType`,op:1206,type:`number`,value:2},{name:`fontMatrix`,op:1207,type:[`real`,`real`,`real`,`real`,`real`,`real`],value:[.001,0,0,.001,0,0]},{name:`uniqueId`,op:13,type:`number`},{name:`fontBBox`,op:5,type:[`number`,`number`,`number`,`number`],value:[0,0,0,0]},{name:`strokeWidth`,op:1208,type:`number`,value:0},{name:`xuid`,op:14,type:[],value:null},{name:`charset`,op:15,type:`offset`,value:0},{name:`encoding`,op:16,type:`offset`,value:0},{name:`charStrings`,op:17,type:`offset`,value:0},{name:`private`,op:18,type:[`number`,`offset`],value:[0,0]},{name:`ros`,op:1230,type:[`SID`,`SID`,`number`]},{name:`cidFontVersion`,op:1231,type:`number`,value:0},{name:`cidFontRevision`,op:1232,type:`number`,value:0},{name:`cidFontType`,op:1233,type:`number`,value:0},{name:`cidCount`,op:1234,type:`number`,value:8720},{name:`uidBase`,op:1235,type:`number`},{name:`fdArray`,op:1236,type:`offset`},{name:`fdSelect`,op:1237,type:`offset`},{name:`fontName`,op:1238,type:`SID`}],un=[{name:`fontMatrix`,op:1207,type:[`real`,`real`,`real`,`real`,`real`,`real`],value:[.001,0,0,.001,0,0]},{name:`charStrings`,op:17,type:`offset`},{name:`fdArray`,op:1236,type:`offset`},{name:`fdSelect`,op:1237,type:`offset`},{name:`vstore`,op:24,type:`offset`}],dn=[{name:`subrs`,op:19,type:`offset`,value:0},{name:`defaultWidthX`,op:20,type:`number`,value:0},{name:`nominalWidthX`,op:21,type:`number`,value:0}],fn=[{name:`blueValues`,op:6,type:`delta`},{name:`otherBlues`,op:7,type:`delta`},{name:`familyBlues`,op:7,type:`delta`},{name:`familyBlues`,op:8,type:`delta`},{name:`familyOtherBlues`,op:9,type:`delta`},{name:`blueScale`,op:1209,type:`number`,value:.039625},{name:`blueShift`,op:1210,type:`number`,value:7},{name:`blueFuzz`,op:1211,type:`number`,value:1},{name:`stdHW`,op:10,type:`number`},{name:`stdVW`,op:11,type:`number`},{name:`stemSnapH`,op:1212,type:`number`},{name:`stemSnapV`,op:1213,type:`number`},{name:`languageGroup`,op:1217,type:`number`,value:0},{name:`expansionFactor`,op:1218,type:`number`,value:.06},{name:`vsindex`,op:22,type:`number`,value:0},{name:`subrs`,op:19,type:`offset`}],pn=[{name:`private`,op:18,type:[`number`,`offset`],value:[0,0]}];function mn(e,t,n,r){return sn(an(e,t,e.byteLength,r),r>1?un:ln,n)}function hn(e,t,n,r,i){return sn(an(e,t,n,i),i>1?fn:dn,r)}function gn(e,t,n){return sn(an(e,t,void 0,n),pn)}function _n(e,t,n){let r=[];for(let i=0;i<n.length;i++){let a=gn(new DataView(new Uint8Array(n[i]).buffer),0,2),o=a.private[0],s=a.private[1];if(o!==0&&s!==0){let n=hn(e,s+t,o,[],2);n.subrs&&(a._subrs=Qt(e,s+n.subrs+t,void 0,2).objects,a._subrsBias=Zt(a._subrs)),a._privateDict=n}r.push(a)}return r}function vn(e,t,n,r,i){let a=[];for(let o=0;o<n.length;o+=1){let s=mn(new DataView(new Uint8Array(n[o]).buffer),0,r,i);s._subrs=[],s._subrsBias=0,s._defaultWidthX=0,s._nominalWidthX=0;let c=i<2?s.private[0]:0,l=i<2?s.private[1]:0;if(c!==0&&l!==0){let n=hn(e,l+t,c,r,i);s._defaultWidthX=n.defaultWidthX,s._nominalWidthX=n.nominalWidthX,n.subrs!==0&&(s._subrs=Qt(e,l+n.subrs+t,void 0,i).objects,s._subrsBias=Zt(s._subrs)),s._privateDict=n}a.push(s)}return a}function yn(e,t,n,r,i){let a,o,s=new G.Parser(e,t);--n;let c=[`.notdef`],l=s.parseCard8();if(l===0)for(let e=0;e<n;e+=1)a=s.parseSID(),i?c.push(a):c.push(on(r,a)||a);else if(l===1)for(;c.length<=n;){a=s.parseSID(),o=s.parseCard8();for(let e=0;e<=o;e+=1)i?c.push(`cid`+(`00000`+a).slice(-5)):c.push(on(r,a)||a),a+=1}else if(l===2)for(;c.length<=n;){a=s.parseSID(),o=s.parseCard16();for(let e=0;e<=o;e+=1)i?c.push(`cid`+(`00000`+a).slice(-5)):c.push(on(r,a)||a),a+=1}else throw Error(`Unknown charset format `+l);return c}function bn(e,t){let n,r={},i=new G.Parser(e,t),a=i.parseCard8();if(a===0){let e=i.parseCard8();for(let t=0;t<e;t+=1)n=i.parseCard8(),r[n]=t}else if(a===1){let e=i.parseCard8();n=1;for(let t=0;t<e;t+=1){let e=i.parseCard8(),t=i.parseCard8();for(let i=e;i<=e+t;i+=1)r[i]=n,n+=1}}else throw Error(`Unknown encoding format `+a);return r}function xn(e){let t=e.pop();for(;e.length>t;)e.pop()}function Sn(e,t){let n=e.tables.cff&&e.tables.cff.topDict&&e.tables.cff.topDict.paintType||0;return n===2&&(t.fill=null,t.stroke=`black`,t.strokeWidth=e.tables.cff.topDict.strokeWidth||0),n}function Cn(e,t,n,r,i){let a,o,s,c,l=new se,u=[],d=0,f=!1,p=!1,m=0,h=0,g,_,v,y,b=0,x=[],S,C=0,w=e.tables.cff2||e.tables.cff;if(v=w.topDict._defaultWidthX,y=w.topDict._nominalWidthX,i||=e.variation&&e.variation.get(),t.getBlendPath||=function(i){return Cn(e,t,n,r,i)},e.isCIDFont||r>1){let e=w.topDict._fdSelect?w.topDict._fdSelect[t.index]:0,n=w.topDict._fdArray[e];g=n._subrs,_=n._subrsBias,r>1?(x=w.topDict._vstore.itemVariationStore,b=n._privateDict.vsindex):(v=n._defaultWidthX,y=n._nominalWidthX)}else g=w.topDict._subrs,_=w.topDict._subrsBias;let T=Sn(e,l),E=v;function D(e,t){p&&T!==2&&l.closePath(),l.moveTo(e,t),p=!0}function O(){let e;e=!!(u.length&1),e&&!f&&(E=u.shift()+y),d+=u.length>>1,u.length=0,f=!0}function k(n){let v,w,ee,te,ne,re,A,j,M,ie,ae,oe,N=0;for(;N<n.length;){let fe=n[N];switch(N+=1,fe){case 1:O();break;case 3:O();break;case 4:u.length>1&&!f&&(E=u.shift()+y,f=!0),h+=u.pop(),D(m,h);break;case 5:for(;u.length>0;)m+=u.shift(),h+=u.shift(),l.lineTo(m,h);break;case 6:for(;u.length>0&&(m+=u.shift(),l.lineTo(m,h),u.length!==0);)h+=u.shift(),l.lineTo(m,h);break;case 7:for(;u.length>0&&(h+=u.shift(),l.lineTo(m,h),u.length!==0);)m+=u.shift(),l.lineTo(m,h);break;case 8:for(;u.length>0;)a=m+u.shift(),o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),m=s+u.shift(),h=c+u.shift(),l.curveTo(a,o,s,c,m,h);break;case 10:if(ne=u.pop()+_,re=g[ne],re){if(C>=Xt){console.warn(`CFF charstring subroutine call depth exceeded, skipping callsubr`);break}C++,k(re),C--}break;case 11:if(r>1){console.error(`CFF CharString operator return (11) is not supported in CFF2`);break}return;case 12:switch(fe=n[N],N+=1,fe){case 35:a=m+u.shift(),o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),A=s+u.shift(),j=c+u.shift(),M=A+u.shift(),ie=j+u.shift(),ae=M+u.shift(),oe=ie+u.shift(),m=ae+u.shift(),h=oe+u.shift(),u.shift(),l.curveTo(a,o,s,c,A,j),l.curveTo(M,ie,ae,oe,m,h);break;case 34:a=m+u.shift(),o=h,s=a+u.shift(),c=o+u.shift(),A=s+u.shift(),j=c,M=A+u.shift(),ie=c,ae=M+u.shift(),oe=h,m=ae+u.shift(),l.curveTo(a,o,s,c,A,j),l.curveTo(M,ie,ae,oe,m,h);break;case 36:a=m+u.shift(),o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),A=s+u.shift(),j=c,M=A+u.shift(),ie=c,ae=M+u.shift(),oe=ie+u.shift(),m=ae+u.shift(),l.curveTo(a,o,s,c,A,j),l.curveTo(M,ie,ae,oe,m,h);break;case 37:a=m+u.shift(),o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),A=s+u.shift(),j=c+u.shift(),M=A+u.shift(),ie=j+u.shift(),ae=M+u.shift(),oe=ie+u.shift(),Math.abs(ae-m)>Math.abs(oe-h)?m=ae+u.shift():h=oe+u.shift(),l.curveTo(a,o,s,c,A,j),l.curveTo(M,ie,ae,oe,m,h);break;default:console.log(`Glyph `+t.index+`: unknown operator 1200`+fe),u.length=0}break;case 14:if(r>1){console.error(`CFF CharString operator endchar (14) is not supported in CFF2`);break}if(u.length>=4){let n=vt[u.pop()],r=vt[u.pop()],i=u.pop(),a=u.pop();if(n&&r){t.isComposite=!0,t.components=[];let o=e.cffEncoding.charset.indexOf(n),s=e.cffEncoding.charset.indexOf(r);t.components.push({glyphIndex:s,dx:0,dy:0}),t.components.push({glyphIndex:o,dx:a,dy:i}),l.extend(e.glyphs.get(s).path);let c=e.glyphs.get(o),u=JSON.parse(JSON.stringify(c.path.commands));for(let e=0;e<u.length;e+=1){let t=u[e];t.type!==`Z`&&(t.x+=a,t.y+=i),(t.type===`Q`||t.type===`C`)&&(t.x1+=a,t.y1+=i),t.type===`C`&&(t.x2+=a,t.y2+=i)}l.extend(u)}}else u.length>0&&!f&&(E=u.shift()+y,f=!0);p&&T!==2&&(l.closePath(),p=!1);break;case 15:if(r<2){console.error(`CFF2 CharString operator vsindex (15) is not supported in CFF`);break}b=u.pop();break;case 16:if(r<2){console.error(`CFF2 CharString operator blend (16) is not supported in CFF`);break}S||=e.variation&&i&&e.variation.process.getBlendVector(x,b,i);var se=u.pop(),ce=S?S.length:x.itemVariationSubtables[b].regionIndexes.length,le=se*ce,P=u.length-le,ue=P-se;if(S)for(let e=0;e<se;e++){var de=u[ue+e];for(let e=0;e<ce;e++)de+=S[e]*u[P++];u[ue+e]=de}for(;le--;)u.pop();break;case 18:O();break;case 19:case 20:O(),N+=d+7>>3;break;case 21:u.length>2&&!f&&(E=u.shift()+y,f=!0),h+=u.pop(),m+=u.pop(),D(m,h);break;case 22:u.length>1&&!f&&(E=u.shift()+y,f=!0),m+=u.pop(),D(m,h);break;case 23:O();break;case 24:for(;u.length>2;)a=m+u.shift(),o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),m=s+u.shift(),h=c+u.shift(),l.curveTo(a,o,s,c,m,h);m+=u.shift(),h+=u.shift(),l.lineTo(m,h);break;case 25:for(;u.length>6;)m+=u.shift(),h+=u.shift(),l.lineTo(m,h);a=m+u.shift(),o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),m=s+u.shift(),h=c+u.shift(),l.curveTo(a,o,s,c,m,h);break;case 26:for(u.length&1&&(m+=u.shift());u.length>0;)a=m,o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),m=s,h=c+u.shift(),l.curveTo(a,o,s,c,m,h);break;case 27:for(u.length&1&&(h+=u.shift());u.length>0;)a=m+u.shift(),o=h,s=a+u.shift(),c=o+u.shift(),m=s+u.shift(),h=c,l.curveTo(a,o,s,c,m,h);break;case 28:v=n[N],w=n[N+1],u.push((v<<24|w<<16)>>16),N+=2;break;case 29:if(ne=u.pop()+e.gsubrsBias,re=e.gsubrs[ne],re){if(C>=Xt){console.warn(`CFF charstring subroutine call depth exceeded, skipping callgsubr`);break}C++,k(re),C--}break;case 30:for(;u.length>0&&(a=m,o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),m=s+u.shift(),h=c+(u.length===1?u.shift():0),l.curveTo(a,o,s,c,m,h),u.length!==0);)a=m+u.shift(),o=h,s=a+u.shift(),c=o+u.shift(),h=c+u.shift(),m=s+(u.length===1?u.shift():0),l.curveTo(a,o,s,c,m,h);break;case 31:for(;u.length>0&&(a=m+u.shift(),o=h,s=a+u.shift(),c=o+u.shift(),h=c+u.shift(),m=s+(u.length===1?u.shift():0),l.curveTo(a,o,s,c,m,h),u.length!==0);)a=m,o=h+u.shift(),s=a+u.shift(),c=o+u.shift(),m=s+u.shift(),h=c+(u.length===1?u.shift():0),l.curveTo(a,o,s,c,m,h);break;default:fe<32?console.log(`Glyph `+t.index+`: unknown operator `+fe):fe<247?u.push(fe-139):fe<251?(v=n[N],N+=1,u.push((fe-247)*256+v+108)):fe<255?(v=n[N],N+=1,u.push(-(fe-251)*256-v-108)):(v=n[N],w=n[N+1],ee=n[N+2],te=n[N+3],N+=4,u.push((v<<24|w<<16|ee<<8|te)/65536))}}}return k(n),e.variation&&i&&(l.commands=l.commands.map(e=>{let t=Object.keys(e);for(let n=0;n<t.length;n++){let r=t[n];r!==`type`&&(e[r]=Math.round(e[r]))}return e})),f&&(t.advanceWidth=E),l}function wn(e,t,n,r,i){let a=[],o,s=new G.Parser(e,t),c=s.parseCard8();if(c===0)for(let e=0;e<n;e++){if(o=s.parseCard8(),o>=r)throw Error(`CFF table CID Font FDSelect has bad FD index value `+o+` (FD count `+r+`)`);a.push(o)}else if(c===3||i>1&&c===4){let e=c===4?s.parseULong():s.parseCard16(),t=c===4?s.parseULong():s.parseCard16();if(t!==0)throw Error(`CFF Table CID Font FDSelect format ${c} range has bad initial GID ${t}`);let l;for(let u=0;u<e;u++){if(o=c===4?s.parseUShort():s.parseCard8(),l=c===4?s.parseULong():s.parseCard16(),o>=r)throw Error(`CFF table CID Font FDSelect has bad FD index value `+o+` (FD count `+r+`)`);if(l>n)throw Error(`CFF Table CID Font FDSelect format ${i} range has bad GID ${l}`);for(;t<l;t++)a.push(o);t=l}if(l!==n)throw Error(`CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID `+l)}else throw Error(`CFF Table CID Font FDSelect table has unsupported format `+c);return a}function Tn(e,t,n,r){let i,a=cn(e,t);i=a.formatMajor===2?n.tables.cff2={}:n.tables.cff={};let o=a.formatMajor>1?null:Qt(e,a.endOffset,G.bytesToString),s=a.formatMajor>1?null:Qt(e,o.endOffset),c=a.formatMajor>1?null:Qt(e,s.endOffset,G.bytesToString);n.gsubrs=Qt(e,a.formatMajor>1?t+a.size+a.topDictLength:c.endOffset,void 0,a.formatMajor).objects,n.gsubrsBias=Zt(n.gsubrs);let l;if(a.formatMajor>1){let n=t+a.size;l=vn(e,0,[G.getBytes(e,n,n+a.topDictLength)],void 0,a.formatMajor)[0]}else{let n=vn(e,t,s.objects,c.objects,a.formatMajor);if(n.length!==1)throw Error(`CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = `+n.length);l=n[0]}if(i.topDict=l,l._privateDict&&(n.defaultWidthX=l._privateDict.defaultWidthX,n.nominalWidthX=l._privateDict.nominalWidthX),a.formatMajor<2&&l.ros[0]!==void 0&&l.ros[1]!==void 0&&(n.isCIDFont=!0),a.formatMajor>1){let r=l.fdArray,i=l.fdSelect;if(!r)throw Error(`This is a CFF2 font, but FDArray information is missing`);let o=_n(e,t,Qt(e,t+r,null,a.formatMajor).objects);l._fdArray=o,i&&(l._fdSelect=wn(e,t+i,n.numGlyphs,o.length,a.formatMajor))}else if(n.isCIDFont){let r=l.fdArray,i=l.fdSelect;if(r===0||i===0)throw Error(`Font is marked as a CID font, but FDArray and/or FDSelect information is missing`);r+=t;let o=vn(e,t,Qt(e,r).objects,c.objects,a.formatMajor);l._fdArray=o,i+=t,l._fdSelect=wn(e,i,n.numGlyphs,o.length,a.formatMajor)}if(a.formatMajor<2){let r=t+l.private[1],i=hn(e,r,l.private[0],c.objects,a.formatMajor);n.defaultWidthX=i.defaultWidthX,n.nominalWidthX=i.nominalWidthX,i.subrs===0?(n.subrs=[],n.subrsBias=0):(n.subrs=Qt(e,r+i.subrs).objects,n.subrsBias=Zt(n.subrs))}let u;if(r.lowMemory?(u=$t(e,t+l.charStrings,a.formatMajor),n.nGlyphs=u.offsets.length-+(a.formatMajor>1)):(u=Qt(e,t+l.charStrings,null,a.formatMajor),n.nGlyphs=u.objects.length),a.formatMajor>1&&n.tables.maxp&&n.nGlyphs!==n.tables.maxp.numGlyphs&&console.error(`Glyph count in the CFF2 table (${n.nGlyphs}) must correspond to the glyph count in the maxp table (${n.tables.maxp.numGlyphs})`),a.formatMajor<2){let r=[],i=[];r=l.charset===0?ht:l.charset===1?gt:l.charset===2?_t:yn(e,t+l.charset,n.nGlyphs,c.objects,n.isCIDFont),i=l.encoding===0?vt:l.encoding===1?yt:bn(e,t+l.encoding),n.cffEncoding=new St(i,r),n.encoding=n.encoding||n.cffEncoding}if(n.glyphs=new Jt.GlyphSet(n),r.lowMemory)n._push=function(r){let i=en(r,u.offsets,e,t+l.charStrings,void 0,a.formatMajor);n.glyphs.push(r,Jt.cffGlyphLoader(n,r,Cn,i,a.formatMajor))};else for(let e=0;e<n.nGlyphs;e+=1){let t=u.objects[e];n.glyphs.push(e,Jt.cffGlyphLoader(n,e,Cn,t,a.formatMajor))}if(l.vstore){let n=new G.Parser(e,t+l.vstore);l._vstore=n.parseVariationStore()}}function En(e,t){let n,r=mt.indexOf(e);return r>=0&&(n=r),r=t.indexOf(e),r>=0?n=r+mt.length:(n=mt.length+t.length,t.push(e)),n}function Dn(){return new U.Record(`Header`,[{name:`major`,type:`Card8`,value:1},{name:`minor`,type:`Card8`,value:0},{name:`hdrSize`,type:`Card8`,value:4},{name:`major`,type:`Card8`,value:1}])}function On(e){let t=new U.Record(`Name INDEX`,[{name:`names`,type:`INDEX`,value:[]}]);t.names=[];for(let n=0;n<e.length;n+=1)t.names.push({name:`name_`+n,type:`NAME`,value:e[n]});return t}function kn(e,t,n){let r={};for(let i=0;i<e.length;i+=1){let a=e[i],o=t[a.name];o!==void 0&&!Yt(o,a.value)&&(a.type===`SID`&&(o=En(o,n)),r[a.op]={name:a.name,type:a.type,value:o})}return r}function An(e,t,n){let r=new U.Record(`Top DICT`,[{name:`dict`,type:`DICT`,value:{}}]);return r.dict=kn(n>1?un:ln,e,t),r}function jn(e){let t=new U.Record(`Top DICT INDEX`,[{name:`topDicts`,type:`INDEX`,value:[]}]);return t.topDicts=[{name:`topDict_0`,type:`TABLE`,value:e}],t}function Mn(e){let t=new U.Record(`String INDEX`,[{name:`strings`,type:`INDEX`,value:[]}]);t.strings=[];for(let n=0;n<e.length;n+=1)t.strings.push({name:`string_`+n,type:`STRING`,value:e[n]});return t}function Nn(){return new U.Record(`Global Subr INDEX`,[{name:`subrs`,type:`INDEX`,value:[]}])}function Pn(e,t){let n=new U.Record(`Charsets`,[{name:`format`,type:`Card8`,value:0}]);for(let r=0;r<e.length;r+=1){let i=e[r],a=En(i,t);n.fields.push({name:`glyph_`+r,type:`SID`,value:a})}return n}function Fn(e,t){let n=[],r=e.path;t<2&&n.push({name:`width`,type:`NUMBER`,value:e.advanceWidth});let i=0,a=0;for(let e=0;e<r.commands.length;e+=1){let t,o,s=r.commands[e];if(s.type===`Q`){let e=1/3,t=2/3;s={type:`C`,x:s.x,y:s.y,x1:Math.round(e*i+t*s.x1),y1:Math.round(e*a+t*s.y1),x2:Math.round(e*s.x+t*s.x1),y2:Math.round(e*s.y+t*s.y1)}}if(s.type===`M`)t=Math.round(s.x-i),o=Math.round(s.y-a),n.push({name:`dx`,type:`NUMBER`,value:t}),n.push({name:`dy`,type:`NUMBER`,value:o}),n.push({name:`rmoveto`,type:`OP`,value:21}),i=Math.round(s.x),a=Math.round(s.y);else if(s.type===`L`)t=Math.round(s.x-i),o=Math.round(s.y-a),n.push({name:`dx`,type:`NUMBER`,value:t}),n.push({name:`dy`,type:`NUMBER`,value:o}),n.push({name:`rlineto`,type:`OP`,value:5}),i=Math.round(s.x),a=Math.round(s.y);else if(s.type===`C`){let e=Math.round(s.x1-i),r=Math.round(s.y1-a),c=Math.round(s.x2-s.x1),l=Math.round(s.y2-s.y1);t=Math.round(s.x-s.x2),o=Math.round(s.y-s.y2),n.push({name:`dx1`,type:`NUMBER`,value:e}),n.push({name:`dy1`,type:`NUMBER`,value:r}),n.push({name:`dx2`,type:`NUMBER`,value:c}),n.push({name:`dy2`,type:`NUMBER`,value:l}),n.push({name:`dx`,type:`NUMBER`,value:t}),n.push({name:`dy`,type:`NUMBER`,value:o}),n.push({name:`rrcurveto`,type:`OP`,value:8}),i=Math.round(s.x),a=Math.round(s.y)}}return t<2&&n.push({name:`endchar`,type:`OP`,value:14}),n}function In(e,t){let n=new U.Record(`CharStrings INDEX`,[{name:`charStrings`,type:`INDEX`,value:[]}]);for(let r=0;r<e.length;r+=1){let i=e.get(r),a=Fn(i,t);n.charStrings.push({name:i.name,type:`CHARSTRING`,value:a})}return n}function Ln(e,t,n){let r=new U.Record(`Private DICT`,[{name:`dict`,type:`DICT`,value:{}}]);return r.dict=kn(n>1?fn:dn,e,t),r}function Rn(e,t){let n=new U.Table(`CFF `,[{name:`header`,type:`RECORD`},{name:`nameIndex`,type:`RECORD`},{name:`topDictIndex`,type:`RECORD`},{name:`stringIndex`,type:`RECORD`},{name:`globalSubrIndex`,type:`RECORD`},{name:`charsets`,type:`RECORD`},{name:`charStringsIndex`,type:`RECORD`},{name:`privateDict`,type:`RECORD`}]),r=1/t.unitsPerEm,i={version:t.version,fullName:t.fullName,familyName:t.familyName,weight:t.weightName,fontBBox:t.fontBBox||[0,0,0,0],fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},a=t&&t.topDict||{};a.paintType&&(i.paintType=a.paintType,i.strokeWidth=a.strokeWidth||0);let o={},s=[],c;for(let t=1;t<e.length;t+=1)c=e.get(t),s.push(c.name);let l=[];n.header=Dn(),n.nameIndex=On([t.postScriptName]);let u=An(i,l);return n.topDictIndex=jn(u),n.globalSubrIndex=Nn(),n.charsets=Pn(s,l),n.charStringsIndex=In(e,1),n.privateDict=Ln(o,l),n.stringIndex=Mn(l),i.charset=n.header.sizeOf()+n.nameIndex.sizeOf()+n.topDictIndex.sizeOf()+n.stringIndex.sizeOf()+n.globalSubrIndex.sizeOf(),i.encoding=0,i.charStrings=i.charset+n.charsets.sizeOf(),i.private[1]=i.charStrings+n.charStringsIndex.sizeOf(),u=An(i,l),n.topDictIndex=jn(u),n}var zn={parse:Tn,make:Rn};function Bn(e,t){let n={},r=new G.Parser(e,t);return n.version=r.parseVersion(),n.fontRevision=Math.round(r.parseFixed()*1e3)/1e3,n.checkSumAdjustment=r.parseULong(),n.magicNumber=r.parseULong(),P.argument(n.magicNumber===1594834165,`Font header has wrong magic number.`),n.flags=r.parseUShort(),n.unitsPerEm=r.parseUShort(),n.created=r.parseLongDateTime(),n.modified=r.parseLongDateTime(),n.xMin=r.parseShort(),n.yMin=r.parseShort(),n.xMax=r.parseShort(),n.yMax=r.parseShort(),n.macStyle=r.parseUShort(),n.lowestRecPPEM=r.parseUShort(),n.fontDirectionHint=r.parseShort(),n.indexToLocFormat=r.parseShort(),n.glyphDataFormat=r.parseShort(),n}function Vn(e){let t=Math.round(new Date().getTime()/1e3)+2082844800,n=t,r=e.macStyle||0;return e.createdTimestamp&&(n=e.createdTimestamp+2082844800),new U.Table(`head`,[{name:`version`,type:`FIXED`,value:65536},{name:`fontRevision`,type:`FIXED`,value:65536},{name:`checkSumAdjustment`,type:`ULONG`,value:0},{name:`magicNumber`,type:`ULONG`,value:1594834165},{name:`flags`,type:`USHORT`,value:0},{name:`unitsPerEm`,type:`USHORT`,value:1e3},{name:`created`,type:`LONGDATETIME`,value:n},{name:`modified`,type:`LONGDATETIME`,value:t},{name:`xMin`,type:`SHORT`,value:0},{name:`yMin`,type:`SHORT`,value:0},{name:`xMax`,type:`SHORT`,value:0},{name:`yMax`,type:`SHORT`,value:0},{name:`macStyle`,type:`USHORT`,value:r},{name:`lowestRecPPEM`,type:`USHORT`,value:0},{name:`fontDirectionHint`,type:`SHORT`,value:2},{name:`indexToLocFormat`,type:`SHORT`,value:0},{name:`glyphDataFormat`,type:`SHORT`,value:0}],e)}var Hn={parse:Bn,make:Vn};function Un(e,t){let n={},r=new G.Parser(e,t);return n.version=r.parseVersion(),n.ascender=r.parseShort(),n.descender=r.parseShort(),n.lineGap=r.parseShort(),n.advanceWidthMax=r.parseUShort(),n.minLeftSideBearing=r.parseShort(),n.minRightSideBearing=r.parseShort(),n.xMaxExtent=r.parseShort(),n.caretSlopeRise=r.parseShort(),n.caretSlopeRun=r.parseShort(),n.caretOffset=r.parseShort(),r.relativeOffset+=8,n.metricDataFormat=r.parseShort(),n.numberOfHMetrics=r.parseUShort(),n}function Wn(e){return new U.Table(`hhea`,[{name:`version`,type:`FIXED`,value:65536},{name:`ascender`,type:`FWORD`,value:0},{name:`descender`,type:`FWORD`,value:0},{name:`lineGap`,type:`FWORD`,value:0},{name:`advanceWidthMax`,type:`UFWORD`,value:0},{name:`minLeftSideBearing`,type:`FWORD`,value:0},{name:`minRightSideBearing`,type:`FWORD`,value:0},{name:`xMaxExtent`,type:`FWORD`,value:0},{name:`caretSlopeRise`,type:`SHORT`,value:1},{name:`caretSlopeRun`,type:`SHORT`,value:0},{name:`caretOffset`,type:`SHORT`,value:0},{name:`reserved1`,type:`SHORT`,value:0},{name:`reserved2`,type:`SHORT`,value:0},{name:`reserved3`,type:`SHORT`,value:0},{name:`reserved4`,type:`SHORT`,value:0},{name:`metricDataFormat`,type:`SHORT`,value:0},{name:`numberOfHMetrics`,type:`USHORT`,value:0}],e)}var Gn={parse:Un,make:Wn};function Kn(e,t,n,r,i){let a,o,s=new G.Parser(e,t);for(let e=0;e<r;e+=1){e<n&&(a=s.parseUShort(),o=s.parseShort());let t=i.get(e);t.advanceWidth=a,t.leftSideBearing=o}}function qn(e,t,n,r,i){e._hmtxTableData={};let a,o,s=new G.Parser(t,n);for(let t=0;t<i;t+=1)t<r&&(a=s.parseUShort(),o=s.parseShort()),e._hmtxTableData[t]={advanceWidth:a,leftSideBearing:o}}function Jn(e,t,n,r,i,a,o){o.lowMemory?qn(e,t,n,r,i):Kn(t,n,r,i,a)}function Yn(e){let t=new U.Table(`hmtx`,[]);for(let n=0;n<e.length;n+=1){let r=e.get(n),i=r.advanceWidth||0,a=r.leftSideBearing||0;t.fields.push({name:`advanceWidth_`+n,type:`USHORT`,value:i}),t.fields.push({name:`leftSideBearing_`+n,type:`SHORT`,value:a})}return t}var Xn={parse:Jn,make:Yn};function Zn(e){let t=new U.Table(`ltag`,[{name:`version`,type:`ULONG`,value:1},{name:`flags`,type:`ULONG`,value:0},{name:`numTags`,type:`ULONG`,value:e.length}]),n=``,r=12+e.length*4;for(let i=0;i<e.length;++i){let a=n.indexOf(e[i]);a<0&&(a=n.length,n+=e[i]),t.fields.push({name:`offset `+i,type:`USHORT`,value:r+a}),t.fields.push({name:`length `+i,type:`USHORT`,value:e[i].length})}return t.fields.push({name:`stringPool`,type:`CHARARRAY`,value:n}),t}function Qn(e,t){let n=new G.Parser(e,t),r=n.parseULong();P.argument(r===1,`Unsupported ltag table version.`),n.skip(`uLong`,1);let i=n.parseULong(),a=[];for(let r=0;r<i;r++){let r=``,i=t+n.parseUShort(),o=n.parseUShort();for(let t=i;t<i+o;++t)r+=String.fromCharCode(e.getInt8(t));a.push(r)}return a}var $n={make:Zn,parse:Qn};function er(e,t){let n={},r=new G.Parser(e,t);return n.version=r.parseVersion(),n.numGlyphs=r.parseUShort(),n.version===1&&(n.maxPoints=r.parseUShort(),n.maxContours=r.parseUShort(),n.maxCompositePoints=r.parseUShort(),n.maxCompositeContours=r.parseUShort(),n.maxZones=r.parseUShort(),n.maxTwilightPoints=r.parseUShort(),n.maxStorage=r.parseUShort(),n.maxFunctionDefs=r.parseUShort(),n.maxInstructionDefs=r.parseUShort(),n.maxStackElements=r.parseUShort(),n.maxSizeOfInstructions=r.parseUShort(),n.maxComponentElements=r.parseUShort(),n.maxComponentDepth=r.parseUShort()),n}function tr(e){return new U.Table(`maxp`,[{name:`version`,type:`FIXED`,value:20480},{name:`numGlyphs`,type:`USHORT`,value:e}])}var nr={parse:er,make:tr},rr=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function ir(e){for(let t=0;t<rr.length;t+=1){let n=rr[t];if(e>=n.begin&&e<n.end)return t}return-1}function ar(e,t){let n={},r=new G.Parser(e,t);n.version=r.parseUShort(),n.xAvgCharWidth=r.parseShort(),n.usWeightClass=r.parseUShort(),n.usWidthClass=r.parseUShort(),n.fsType=r.parseUShort(),n.ySubscriptXSize=r.parseShort(),n.ySubscriptYSize=r.parseShort(),n.ySubscriptXOffset=r.parseShort(),n.ySubscriptYOffset=r.parseShort(),n.ySuperscriptXSize=r.parseShort(),n.ySuperscriptYSize=r.parseShort(),n.ySuperscriptXOffset=r.parseShort(),n.ySuperscriptYOffset=r.parseShort(),n.yStrikeoutSize=r.parseShort(),n.yStrikeoutPosition=r.parseShort(),n.sFamilyClass=r.parseShort(),n.panose=[];for(let e=0;e<10;e++)n.panose[e]=r.parseByte();return n.ulUnicodeRange1=r.parseULong(),n.ulUnicodeRange2=r.parseULong(),n.ulUnicodeRange3=r.parseULong(),n.ulUnicodeRange4=r.parseULong(),n.achVendID=String.fromCharCode(r.parseByte(),r.parseByte(),r.parseByte(),r.parseByte()),n.fsSelection=r.parseUShort(),n.usFirstCharIndex=r.parseUShort(),n.usLastCharIndex=r.parseUShort(),n.sTypoAscender=r.parseShort(),n.sTypoDescender=r.parseShort(),n.sTypoLineGap=r.parseShort(),n.usWinAscent=r.parseUShort(),n.usWinDescent=r.parseUShort(),n.version>=1&&(n.ulCodePageRange1=r.parseULong(),n.ulCodePageRange2=r.parseULong()),n.version>=2&&(n.sxHeight=r.parseShort(),n.sCapHeight=r.parseShort(),n.usDefaultChar=r.parseUShort(),n.usBreakChar=r.parseUShort(),n.usMaxContent=r.parseUShort()),n}function or(e){return new U.Table(`OS/2`,[{name:`version`,type:`USHORT`,value:3},{name:`xAvgCharWidth`,type:`SHORT`,value:0},{name:`usWeightClass`,type:`USHORT`,value:0},{name:`usWidthClass`,type:`USHORT`,value:0},{name:`fsType`,type:`USHORT`,value:0},{name:`ySubscriptXSize`,type:`SHORT`,value:650},{name:`ySubscriptYSize`,type:`SHORT`,value:699},{name:`ySubscriptXOffset`,type:`SHORT`,value:0},{name:`ySubscriptYOffset`,type:`SHORT`,value:140},{name:`ySuperscriptXSize`,type:`SHORT`,value:650},{name:`ySuperscriptYSize`,type:`SHORT`,value:699},{name:`ySuperscriptXOffset`,type:`SHORT`,value:0},{name:`ySuperscriptYOffset`,type:`SHORT`,value:479},{name:`yStrikeoutSize`,type:`SHORT`,value:49},{name:`yStrikeoutPosition`,type:`SHORT`,value:258},{name:`sFamilyClass`,type:`SHORT`,value:0},{name:`bFamilyType`,type:`BYTE`,value:0},{name:`bSerifStyle`,type:`BYTE`,value:0},{name:`bWeight`,type:`BYTE`,value:0},{name:`bProportion`,type:`BYTE`,value:0},{name:`bContrast`,type:`BYTE`,value:0},{name:`bStrokeVariation`,type:`BYTE`,value:0},{name:`bArmStyle`,type:`BYTE`,value:0},{name:`bLetterform`,type:`BYTE`,value:0},{name:`bMidline`,type:`BYTE`,value:0},{name:`bXHeight`,type:`BYTE`,value:0},{name:`ulUnicodeRange1`,type:`ULONG`,value:0},{name:`ulUnicodeRange2`,type:`ULONG`,value:0},{name:`ulUnicodeRange3`,type:`ULONG`,value:0},{name:`ulUnicodeRange4`,type:`ULONG`,value:0},{name:`achVendID`,type:`CHARARRAY`,value:`XXXX`},{name:`fsSelection`,type:`USHORT`,value:0},{name:`usFirstCharIndex`,type:`USHORT`,value:0},{name:`usLastCharIndex`,type:`USHORT`,value:0},{name:`sTypoAscender`,type:`SHORT`,value:0},{name:`sTypoDescender`,type:`SHORT`,value:0},{name:`sTypoLineGap`,type:`SHORT`,value:0},{name:`usWinAscent`,type:`USHORT`,value:0},{name:`usWinDescent`,type:`USHORT`,value:0},{name:`ulCodePageRange1`,type:`ULONG`,value:0},{name:`ulCodePageRange2`,type:`ULONG`,value:0},{name:`sxHeight`,type:`SHORT`,value:0},{name:`sCapHeight`,type:`SHORT`,value:0},{name:`usDefaultChar`,type:`USHORT`,value:0},{name:`usBreakChar`,type:`USHORT`,value:0},{name:`usMaxContext`,type:`USHORT`,value:0}],e)}var sr={parse:ar,make:or,unicodeRanges:rr,getUnicodeRange:ir};function cr(e,t){let n={},r=new G.Parser(e,t);switch(n.version=r.parseVersion(),n.italicAngle=r.parseFixed(),n.underlinePosition=r.parseShort(),n.underlineThickness=r.parseShort(),n.isFixedPitch=r.parseULong(),n.minMemType42=r.parseULong(),n.maxMemType42=r.parseULong(),n.minMemType1=r.parseULong(),n.maxMemType1=r.parseULong(),n.version){case 1:n.names=Y.slice();break;case 2:n.numberOfGlyphs=r.parseUShort(),n.glyphNameIndex=Array(n.numberOfGlyphs);for(let e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]=r.parseUShort();n.names=[];for(let e=0;e<n.numberOfGlyphs;e++)if(n.glyphNameIndex[e]>=Y.length){let e=r.parseChar();n.names.push(r.parseString(e))}break;case 2.5:n.numberOfGlyphs=r.parseUShort(),n.offset=Array(n.numberOfGlyphs);for(let e=0;e<n.numberOfGlyphs;e++)n.offset[e]=r.parseChar()}return n}function lr(e){let{italicAngle:t=Math.round((e.italicAngle||0)*65536),underlinePosition:n=0,underlineThickness:r=0,isFixedPitch:i=0,minMemType42:a=0,maxMemType42:o=0,minMemType1:s=0,maxMemType1:c=0}=e.tables.post||{};return new U.Table(`post`,[{name:`version`,type:`FIXED`,value:196608},{name:`italicAngle`,type:`FIXED`,value:t},{name:`underlinePosition`,type:`FWORD`,value:n},{name:`underlineThickness`,type:`FWORD`,value:r},{name:`isFixedPitch`,type:`ULONG`,value:i},{name:`minMemType42`,type:`ULONG`,value:a},{name:`maxMemType42`,type:`ULONG`,value:o},{name:`minMemType1`,type:`ULONG`,value:s},{name:`maxMemType1`,type:`ULONG`,value:c}])}var ur={parse:cr,make:lr},dr=Array(9);dr[1]=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(W.coverage),deltaGlyphId:this.parseShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(W.coverage),substitute:this.parseOffset16List()};P.assert(!1,`0x`+e.toString(16)+`: lookup type 1 format must be 1 or 2.`)},dr[2]=function(){let e=this.parseUShort();return P.argument(e===1,`GSUB Multiple Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(W.coverage),sequences:this.parseListOfLists()}},dr[3]=function(){let e=this.parseUShort();return P.argument(e===1,`GSUB Alternate Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(W.coverage),alternateSets:this.parseListOfLists()}},dr[4]=function(){let e=this.parseUShort();return P.argument(e===1,`GSUB ligature table identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(W.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var fr={sequenceIndex:W.uShort,lookupListIndex:W.uShort};dr[5]=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(W.coverage),ruleSets:this.parseListOfLists(function(){let e=this.parseUShort(),t=this.parseUShort();return{input:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,fr)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(W.coverage),classDef:this.parsePointer(W.classDef),classSets:this.parseListOfLists(function(){let e=this.parseUShort(),t=this.parseUShort();return{classes:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,fr)}})};if(t===3){let e=this.parseUShort(),n=this.parseUShort();return{substFormat:t,coverages:this.parseList(e,W.pointer(W.coverage)),lookupRecords:this.parseRecordList(n,fr)}}P.assert(!1,`0x`+e.toString(16)+`: lookup type 5 format must be 1, 2 or 3.`)},dr[6]=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(W.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(fr)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(W.coverage),backtrackClassDef:this.parsePointer(W.classDef),inputClassDef:this.parsePointer(W.classDef),lookaheadClassDef:this.parsePointer(W.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(fr)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(W.pointer(W.coverage)),inputCoverage:this.parseList(W.pointer(W.coverage)),lookaheadCoverage:this.parseList(W.pointer(W.coverage)),lookupRecords:this.parseRecordList(fr)};P.assert(!1,`0x`+e.toString(16)+`: lookup type 6 format must be 1, 2 or 3.`)},dr[7]=function(){let e=this.parseUShort();P.argument(e===1,`GSUB Extension Substitution subtable identifier-format must be 1`);let t=this.parseUShort(),n=new W(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:dr[t].call(n)}},dr[8]=function(){let e=this.parseUShort();return P.argument(e===1,`GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(W.coverage),backtrackCoverage:this.parseList(W.pointer(W.coverage)),lookaheadCoverage:this.parseList(W.pointer(W.coverage)),substitutes:this.parseUShortList()}};function pr(e,t){t||=0;let n=new W(e,t),r=n.parseVersion(1);return P.argument(r===1||r===1.1,`Unsupported GSUB table version.`),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(dr)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(dr),variations:n.parseFeatureVariationsList()}}var mr=Array(9);mr[1]=function(e){if(e.substFormat===1)return new U.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)},{name:`deltaGlyphID`,type:`SHORT`,value:e.deltaGlyphId}]);if(e.substFormat===2)return new U.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:2},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)}].concat(U.ushortList(`substitute`,e.substitute)));P.fail(`Lookup type 1 substFormat must be 1 or 2.`)},mr[2]=function(e){return P.assert(e.substFormat===1,`Lookup type 2 substFormat must be 1.`),new U.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)}].concat(U.tableList(`seqSet`,e.sequences,function(e){return new U.Table(`sequenceSetTable`,U.ushortList(`sequence`,e))})))},mr[3]=function(e){return P.assert(e.substFormat===1,`Lookup type 3 substFormat must be 1.`),new U.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)}].concat(U.tableList(`altSet`,e.alternateSets,function(e){return new U.Table(`alternateSetTable`,U.ushortList(`alternate`,e))})))},mr[4]=function(e){return P.assert(e.substFormat===1,`Lookup type 4 substFormat must be 1.`),new U.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)}].concat(U.tableList(`ligSet`,e.ligatureSets,function(e){return new U.Table(`ligatureSetTable`,U.tableList(`ligature`,e,function(e){return new U.Table(`ligatureTable`,[{name:`ligGlyph`,type:`USHORT`,value:e.ligGlyph}].concat(U.ushortList(`component`,e.components,e.components.length+1)))}))})))},mr[5]=function(e){if(e.substFormat===1)return new U.Table(`contextualSubstitutionTable`,[{name:`substFormat`,type:`USHORT`,value:e.substFormat},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)}].concat(U.tableList(`sequenceRuleSet`,e.ruleSets,function(e){return e?new U.Table(`sequenceRuleSetTable`,U.tableList(`sequenceRule`,e,function(e){let t=U.ushortList(`seqLookup`,[],e.lookupRecords.length).concat(U.ushortList(`inputSequence`,e.input,e.input.length+1));[t[0],t[1]]=[t[1],t[0]];for(let n=0;n<e.lookupRecords.length;n++){let r=e.lookupRecords[n];t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:r.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:r.lookupListIndex})}return new U.Table(`sequenceRuleTable`,t)})):new U.Table(`NULL`,null)})));if(e.substFormat===2)return new U.Table(`contextualSubstitutionTable`,[{name:`substFormat`,type:`USHORT`,value:e.substFormat},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)},{name:`classDef`,type:`TABLE`,value:new U.ClassDef(e.classDef)}].concat(U.tableList(`classSeqRuleSet`,e.classSets,function(e){return e?new U.Table(`classSeqRuleSetTable`,U.tableList(`classSeqRule`,e,function(e){let t=U.ushortList(`classes`,e.classes,e.classes.length+1).concat(U.ushortList(`seqLookupCount`,[],e.lookupRecords.length));for(let n=0;n<e.lookupRecords.length;n++){let r=e.lookupRecords[n];t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:r.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:r.lookupListIndex})}return new U.Table(`classSeqRuleTable`,t)})):new U.Table(`NULL`,null)})));if(e.substFormat===3){let t=[{name:`substFormat`,type:`USHORT`,value:e.substFormat}];t.push({name:`inputGlyphCount`,type:`USHORT`,value:e.coverages.length}),t.push({name:`substitutionCount`,type:`USHORT`,value:e.lookupRecords.length});for(let n=0;n<e.coverages.length;n++){let r=e.coverages[n];t.push({name:`inputCoverage`+n,type:`TABLE`,value:new U.Coverage(r)})}for(let n=0;n<e.lookupRecords.length;n++){let r=e.lookupRecords[n];t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:r.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:r.lookupListIndex})}return new U.Table(`contextualSubstitutionTable`,t)}P.assert(!1,`lookup type 5 format must be 1, 2 or 3.`)},mr[6]=function(e){if(e.substFormat===1)return new U.Table(`chainContextTable`,[{name:`substFormat`,type:`USHORT`,value:e.substFormat},{name:`coverage`,type:`TABLE`,value:new U.Coverage(e.coverage)}].concat(U.tableList(`chainRuleSet`,e.chainRuleSets,function(e){return new U.Table(`chainRuleSetTable`,U.tableList(`chainRule`,e,function(e){let t=U.ushortList(`backtrackGlyph`,e.backtrack,e.backtrack.length).concat(U.ushortList(`inputGlyph`,e.input,e.input.length+1)).concat(U.ushortList(`lookaheadGlyph`,e.lookahead,e.lookahead.length)).concat(U.ushortList(`substitution`,[],e.lookupRecords.length));for(let n=0;n<e.lookupRecords.length;n++){let r=e.lookupRecords[n];t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:r.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:r.lookupListIndex})}return new U.Table(`chainRuleTable`,t)}))})));if(e.substFormat===2)P.assert(!1,`lookup type 6 format 2 is not yet supported.`);else if(e.substFormat===3){let t=[{name:`substFormat`,type:`USHORT`,value:e.substFormat}];t.push({name:`backtrackGlyphCount`,type:`USHORT`,value:e.backtrackCoverage.length});for(let n=0;n<e.backtrackCoverage.length;n++){let r=e.backtrackCoverage[n];t.push({name:`backtrackCoverage`+n,type:`TABLE`,value:new U.Coverage(r)})}t.push({name:`inputGlyphCount`,type:`USHORT`,value:e.inputCoverage.length});for(let n=0;n<e.inputCoverage.length;n++){let r=e.inputCoverage[n];t.push({name:`inputCoverage`+n,type:`TABLE`,value:new U.Coverage(r)})}t.push({name:`lookaheadGlyphCount`,type:`USHORT`,value:e.lookaheadCoverage.length});for(let n=0;n<e.lookaheadCoverage.length;n++){let r=e.lookaheadCoverage[n];t.push({name:`lookaheadCoverage`+n,type:`TABLE`,value:new U.Coverage(r)})}t.push({name:`substitutionCount`,type:`USHORT`,value:e.lookupRecords.length});for(let n=0;n<e.lookupRecords.length;n++){let r=e.lookupRecords[n];t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:r.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:r.lookupListIndex})}return new U.Table(`chainContextTable`,t)}P.assert(!1,`lookup type 6 format must be 1, 2 or 3.`)};function hr(e){return new U.Table(`GSUB`,[{name:`version`,type:`ULONG`,value:65536},{name:`scripts`,type:`TABLE`,value:new U.ScriptList(e.scripts)},{name:`features`,type:`TABLE`,value:new U.FeatureList(e.features)},{name:`lookups`,type:`TABLE`,value:new U.LookupList(e.lookups,mr)}])}var gr={parse:pr,make:hr};function _r(e,t){let n=new G.Parser(e,t),r=n.parseULong();P.argument(r===1,`Unsupported META table version.`),n.parseULong(),n.parseULong();let i=n.parseULong(),a={};for(let r=0;r<i;r++){let r=n.parseTag(),i=n.parseULong(),o=n.parseULong();r!==`appl`&&r!==`bild`&&(a[r]=me.UTF8(e,t+i,o))}return a}function vr(e){let t=Object.keys(e).length,n=``,r=16+t*12,i=new U.Table(`meta`,[{name:`version`,type:`ULONG`,value:1},{name:`flags`,type:`ULONG`,value:0},{name:`offset`,type:`ULONG`,value:r},{name:`numTags`,type:`ULONG`,value:t}]);for(let t in e){let a=n.length;n+=e[t],i.fields.push({name:`tag `+t,type:`TAG`,value:t}),i.fields.push({name:`offset `+t,type:`ULONG`,value:r+a}),i.fields.push({name:`length `+t,type:`ULONG`,value:e[t].length})}return i.fields.push({name:`stringPool`,type:`CHARARRAY`,value:n}),i}var yr={parse:_r,make:vr};function br(e,t){let n=new W(e,t),r=n.parseUShort();r!==0&&console.warn(`Only COLRv0 is currently fully supported. A subset of color glyphs might be available in this font if provided in the v0 format.`);let i=n.parseUShort(),a=n.parseOffset32(),o=n.parseOffset32(),s=n.parseUShort();n.relativeOffset=a;let c=n.parseRecordList(i,{glyphID:W.uShort,firstLayerIndex:W.uShort,numLayers:W.uShort});return n.relativeOffset=o,{version:r,baseGlyphRecords:c,layerRecords:n.parseRecordList(s,{glyphID:W.uShort,paletteIndex:W.uShort})}}function xr({version:e=0,baseGlyphRecords:t=[],layerRecords:n=[]}){P.argument(e===0,`Only COLRv0 supported.`);let r=14+t.length*6;return new U.Table(`COLR`,[{name:`version`,type:`USHORT`,value:e},{name:`numBaseGlyphRecords`,type:`USHORT`,value:t.length},{name:`baseGlyphRecordsOffset`,type:`ULONG`,value:14},{name:`layerRecordsOffset`,type:`ULONG`,value:r},{name:`numLayerRecords`,type:`USHORT`,value:n.length},...t.map((e,t)=>[{name:`glyphID_`+t,type:`USHORT`,value:e.glyphID},{name:`firstLayerIndex_`+t,type:`USHORT`,value:e.firstLayerIndex},{name:`numLayers_`+t,type:`USHORT`,value:e.numLayers}]).flat(),...n.map((e,t)=>[{name:`LayerGlyphID_`+t,type:`USHORT`,value:e.glyphID},{name:`paletteIndex_`+t,type:`USHORT`,value:e.paletteIndex}]).flat()])}var Sr={parse:br,make:xr};function Cr(e,t){return[{name:`tag_`+e,type:`TAG`,value:t.tag},{name:`minValue_`+e,type:`FIXED`,value:t.minValue<<16},{name:`defaultValue_`+e,type:`FIXED`,value:t.defaultValue<<16},{name:`maxValue_`+e,type:`FIXED`,value:t.maxValue<<16},{name:`flags_`+e,type:`USHORT`,value:0},{name:`nameID_`+e,type:`USHORT`,value:t.axisNameID}]}function wr(e,t,n){let r={},i=new G.Parser(e,t);r.tag=i.parseTag(),r.minValue=i.parseFixed(),r.defaultValue=i.parseFixed(),r.maxValue=i.parseFixed(),i.skip(`uShort`,1);let a=i.parseUShort();return r.axisNameID=a,r.name=it(n,a),r}function Tr(e,t,n,r={}){let i=[{name:`nameID_`+e,type:`USHORT`,value:t.subfamilyNameID},{name:`flags_`+e,type:`USHORT`,value:0}];for(let r=0;r<n.length;++r){let a=n[r].tag;i.push({name:`axis_`+e+` `+a,type:`FIXED`,value:t.coordinates[a]<<16})}return r&&r.postScriptNameID&&i.push({name:`postScriptNameID_`,type:`USHORT`,value:t.postScriptNameID===void 0?65535:t.postScriptNameID}),i}function Er(e,t,n,r,i){let a={},o=new G.Parser(e,t),s=o.parseUShort();a.subfamilyNameID=s,a.name=it(r,s,[2,17]),o.skip(`uShort`,1),a.coordinates={};for(let e=0;e<n.length;++e)a.coordinates[n[e].tag]=o.parseFixed();if(o.relativeOffset===i)return a.postScriptNameID=void 0,a.postScriptName=void 0,a;let c=o.parseUShort();return a.postScriptNameID=c==65535?void 0:c,a.postScriptName=a.postScriptNameID===void 0?``:it(r,c,[6]),a}function Dr(e,t){let n=new U.Table(`fvar`,[{name:`version`,type:`ULONG`,value:65536},{name:`offsetToData`,type:`USHORT`,value:0},{name:`countSizePairs`,type:`USHORT`,value:2},{name:`axisCount`,type:`USHORT`,value:e.axes.length},{name:`axisSize`,type:`USHORT`,value:20},{name:`instanceCount`,type:`USHORT`,value:e.instances.length},{name:`instanceSize`,type:`USHORT`,value:4+e.axes.length*4}]);n.offsetToData=n.sizeOf();for(let r=0;r<e.axes.length;r++)n.fields=n.fields.concat(Cr(r,e.axes[r],t));let r={};for(let t=0;t<e.instances.length;t++)if(e.instances[t].postScriptNameID!==void 0){n.instanceSize+=2,r.postScriptNameID=!0;break}for(let t=0;t<e.instances.length;t++)n.fields=n.fields.concat(Tr(t,e.instances[t],e.axes,r));return n}function Or(e,t,n){let r=new G.Parser(e,t),i=r.parseULong();P.argument(i===65536,`Unsupported fvar table version.`);let a=r.parseOffset16();r.skip(`uShort`,1);let o=r.parseUShort(),s=r.parseUShort(),c=r.parseUShort(),l=r.parseUShort(),u=[];for(let r=0;r<o;r++)u.push(wr(e,t+a+r*s,n));let d=[],f=t+a+o*s;for(let t=0;t<c;t++)d.push(Er(e,f+t*l,u,n,l));return{axes:u,instances:d}}var kr={make:Dr,parse:Or},Ar={tag:W.tag,nameID:W.uShort,ordering:W.uShort},jr=[,,,,,];jr[1]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed()}},jr[2]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),nominalValue:this.parseFixed(),rangeMinValue:this.parseFixed(),rangeMaxValue:this.parseFixed()}},jr[3]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed(),linkedValue:this.parseFixed()}},jr[4]=function(){let e=this.parseUShort();return{flags:this.parseUShort(),valueNameID:this.parseUShort(),axisValues:this.parseList(e,function(){return{axisIndex:this.parseUShort(),value:this.parseFixed()}})}};function Mr(){let e=this.parseUShort(),t=jr[e],n={format:e};return t===void 0?(console.warn(`Unknown axis value table format ${e}`),n):Object.assign(n,this.parseStruct(t.bind(this)))}function Nr(e,t,n){t||=0;let r=new G.Parser(e,t),i=r.parseUShort(),a=r.parseUShort();i!==1&&console.warn(`Unsupported STAT table version ${i}.${a}`);let o=[i,a],s=r.parseUShort(),c=r.parseUShort(),l=r.parseOffset32(),u=r.parseUShort(),d=r.parseOffset32(),f=i>1||a>0?r.parseUShort():void 0;n!==void 0&&P.argument(c>=n.axes.length,`STAT axis count must be greater than or equal to fvar axis count`),u>0&&P.argument(c>=0,`STAT axis count must be greater than 0 if STAT axis value count is greater than 0`);let p=[];for(let e=0;e<c;e++)r.offset=t+l,r.relativeOffset=e*s,p.push(r.parseStruct(Ar));r.offset=t,r.relativeOffset=d;let m=r.parseUShortList(u),h=[];for(let e=0;e<u;e++)r.offset=t+d,r.relativeOffset=m[e],h.push(Mr.apply(r));return{version:o,axes:p,values:h,elidedFallbackNameID:f}}var Pr=[,,,,,];Pr[1]=function(e,t){return[{name:`format${e}`,type:`USHORT`,value:1},{name:`axisIndex${e}`,type:`USHORT`,value:t.axisIndex},{name:`flags${e}`,type:`USHORT`,value:t.flags},{name:`valueNameID${e}`,type:`USHORT`,value:t.valueNameID},{name:`value${e}`,type:`FLOAT`,value:t.value}]},Pr[2]=function(e,t){return[{name:`format${e}`,type:`USHORT`,value:2},{name:`axisIndex${e}`,type:`USHORT`,value:t.axisIndex},{name:`flags${e}`,type:`USHORT`,value:t.flags},{name:`valueNameID${e}`,type:`USHORT`,value:t.valueNameID},{name:`nominalValue${e}`,type:`FLOAT`,value:t.nominalValue},{name:`rangeMinValue${e}`,type:`FLOAT`,value:t.rangeMinValue},{name:`rangeMaxValue${e}`,type:`FLOAT`,value:t.rangeMaxValue}]},Pr[3]=function(e,t){return[{name:`format${e}`,type:`USHORT`,value:3},{name:`axisIndex${e}`,type:`USHORT`,value:t.axisIndex},{name:`flags${e}`,type:`USHORT`,value:t.flags},{name:`valueNameID${e}`,type:`USHORT`,value:t.valueNameID},{name:`value${e}`,type:`FLOAT`,value:t.value},{name:`linkedValue${e}`,type:`FLOAT`,value:t.linkedValue}]},Pr[4]=function(e,t){let n=[{name:`format${e}`,type:`USHORT`,value:4},{name:`axisCount${e}`,type:`USHORT`,value:t.axisValues.length},{name:`flags${e}`,type:`USHORT`,value:t.flags},{name:`valueNameID${e}`,type:`USHORT`,value:t.valueNameID}];for(let r=0;r<t.axisValues.length;r++)n=n.concat([{name:`format${e}axisIndex${r}`,type:`USHORT`,value:t.axisValues[r].axisIndex},{name:`format${e}value${r}`,type:`FLOAT`,value:t.axisValues[r].value}]);return n};function Fr(e,t){return new U.Record(`axisRecord_`+e,[{name:`axisTag_`+e,type:`TAG`,value:t.tag},{name:`axisNameID_`+e,type:`USHORT`,value:t.nameID},{name:`axisOrdering_`+e,type:`USHORT`,value:t.ordering}])}function Ir(e,t){let n=t.format,r=Pr[n];P.argument(r!==void 0,`Unknown axis value table format ${n}`);let i=r(e,t);return new U.Table(`axisValueTable_`+e,i)}function Lr(e){let t=new U.Table(`STAT`,[{name:`majorVersion`,type:`USHORT`,value:1},{name:`minorVersion`,type:`USHORT`,value:2},{name:`designAxisSize`,type:`USHORT`,value:8},{name:`designAxisCount`,type:`USHORT`,value:e.axes.length},{name:`designAxesOffset`,type:`ULONG`,value:0},{name:`axisValueCount`,type:`USHORT`,value:e.values.length},{name:`offsetToAxisValueOffsets`,type:`ULONG`,value:0},{name:`elidedFallbackNameID`,type:`USHORT`,value:e.elidedFallbackNameID}]);t.designAxesOffset=t.offsetToAxisValueOffsets=t.sizeOf();for(let n=0;n<e.axes.length;n++){let r=Fr(n,e.axes[n]);t.offsetToAxisValueOffsets+=r.sizeOf(),t.fields=t.fields.concat(r.fields)}let n=[],r=[],i=e.values.length*2;for(let t=0;t<e.values.length;t++){let a=Ir(t,e.values[t]);n.push({name:`offset_`+t,type:`USHORT`,value:i}),i+=a.sizeOf(),r=r.concat(a.fields)}return t.fields=t.fields.concat(n),t.fields=t.fields.concat(r),t}var Rr={make:Lr,parse:Nr};function zr(e,t){return new U.Record(`axisValueMap_`+e,[{name:`fromCoordinate_`+e,type:`F2DOT14`,value:t.fromCoordinate},{name:`toCoordinate_`+e,type:`F2DOT14`,value:t.toCoordinate}])}function Br(e,t){let n=new U.Record(`segmentMap_`+e,[{name:`positionMapCount_`+e,type:`USHORT`,value:t.axisValueMaps.length}]),r=[];for(let n=0;n<t.axisValueMaps.length;n++){let i=zr(`${e}_${n}`,t.axisValueMaps[n]);r=r.concat(i.fields)}return n.fields=n.fields.concat(r),n}function Vr(e,t){P.argument(e.axisSegmentMaps.length===t.axes.length,`avar axis count must correspond to fvar axis count`);let n=new U.Table(`avar`,[{name:`majorVersion`,type:`USHORT`,value:1},{name:`minorVersion`,type:`USHORT`,value:0},{name:`reserved`,type:`USHORT`,value:0},{name:`axisCount`,type:`USHORT`,value:e.axisSegmentMaps.length}]);for(let t=0;t<e.axisSegmentMaps.length;t++){let r=Br(t,e.axisSegmentMaps[t]);n.fields=n.fields.concat(r.fields)}return n}function Hr(e,t,n){t||=0;let r=new W(e,t),i=r.parseUShort(),a=r.parseUShort();i!==1&&console.warn(`Unsupported avar table version ${i}.${a}`),r.skip(`uShort`,1);let o=r.parseUShort();P.argument(o===n.axes.length,`avar axis count must correspond to fvar axis count`);let s=[];for(let e=0;e<o;e++){let e=[],t=r.parseUShort();for(let n=0;n<t;n++){let t=r.parseF2Dot14(),n=r.parseF2Dot14();e.push({fromCoordinate:t,toCoordinate:n})}s.push({axisValueMaps:e})}return{version:[i,a],axisSegmentMaps:s}}var Ur={make:Vr,parse:Hr};function Wr(e,t,n,r){let i=new G.Parser(e,t),a=i.parseTupleVariationStore(i.relativeOffset,n.axes.length,`cvar`,r),o=i.parseUShort(),s=i.parseUShort();return o!==1&&console.warn(`Unsupported cvar table version ${o}.${s}`),{version:[o,s],...a}}function Gr(){console.warn(`Writing of cvar tables is not yet supported.`)}var Kr={make:Gr,parse:Wr};function qr(e,t,n,r){let i=new G.Parser(e,t),a=i.parseUShort(),o=i.parseUShort();a!==1&&console.warn(`Unsupported gvar table version ${a}.${o}`);let s=i.parseUShort();s!==n.axes.length&&console.warn(`axisCount ${s} in gvar table does not match the number of axes ${n.axes.length} in the fvar table!`);let c=i.parseUShort(),l=i.parsePointer32(function(){return this.parseTupleRecords(c,s)}),u=i.parseTupleVariationStoreList(s,`gvar`,r);return{version:[a,o],sharedTuples:l,glyphVariations:u}}function Jr(){console.warn(`Writing of gvar tables is not yet supported.`)}var Yr={make:Jr,parse:qr};function Xr(e,t){let n={},r=new G.Parser(e,t);n.version=r.parseUShort(),P.argument(n.version<=1,`Unsupported gasp table version.`),n.numRanges=r.parseUShort(),n.gaspRanges=[];for(let e=0;e<n.numRanges;e++)n.gaspRanges[e]={rangeMaxPPEM:r.parseUShort(),rangeGaspBehavior:r.parseUShort()};return n}function Zr(e){let t=new U.Table(`gasp`,[{name:`version`,type:`USHORT`,value:1},{name:`numRanges`,type:`USHORT`,value:e.numRanges}]);for(let n in e.gaspRanges)t.fields.push({name:`rangeMaxPPEM`,type:`USHORT`,value:e.gaspRanges[n].rangeMaxPPEM}),t.fields.push({name:`rangeGaspBehavior`,type:`USHORT`,value:e.gaspRanges[n].rangeGaspBehavior});return t}var Qr={parse:Xr,make:Zr};function $r(e,t){let n=new Map,r=e.buffer,i=new W(e,t);if(i.parseUShort()!==0)return n;i.relativeOffset=i.parseOffset32();let a=e.byteOffset+t+i.relativeOffset,o=i.parseUShort(),s=new Map;for(let e=0;e<o;e++){let e=i.parseUShort(),t=i.parseUShort(),o=a+i.parseOffset32(),c=i.parseULong(),l=s.get(o);l===void 0&&(l=new Uint8Array(r,o,c),s.set(o,l));for(let r=e;r<=t;r++)n.set(r,l)}return n}function ei(e){let t=Array.from(e.keys()).sort(),n=[],r=[],i=new Map,a=0,o={endGlyphID:null};for(let s=0,c=t.length;s<c;s++){let c=t[s],l=e.get(c),u=i.get(l);u===void 0&&(u=a,r.push(l),i.set(l,u),a+=l.byteLength),c-1===o.endGlyphID&&u===o.svgDocOffset?o.endGlyphID=c:(o={startGlyphID:c,endGlyphID:c,svgDocOffset:u,svgDocLength:l.byteLength},n.push(o))}let s=n.length,c=r.length,l=2+s*12,u=Array(4+s*4+c),d=0;u[d++]={name:`version`,type:`USHORT`,value:0},u[d++]={name:`svgDocumentListOffset`,type:`ULONG`,value:10},u[d++]={name:`reserved`,type:`ULONG`,value:0},u[d++]={name:`numEntries`,type:`USHORT`,value:s};for(let e=0;e<s;e++){let t=`documentRecord_`+e,{startGlyphID:r,endGlyphID:i,svgDocOffset:a,svgDocLength:o}=n[e];u[d++]={name:t+`_startGlyphID`,type:`USHORT`,value:r},u[d++]={name:t+`_endGlyphID`,type:`USHORT`,value:i},u[d++]={name:t+`_svgDocOffset`,type:`ULONG`,value:l+a},u[d++]={name:t+`_svgDocLength`,type:`ULONG`,value:o}}for(let e=0;e<c;e++)u[d++]={name:`svgDoc_`+e,type:`LITERAL`,value:r[e]};return new U.Table(`SVG `,u)}var ti={make:ei,parse:$r};function ni(e){return Math.log(e)/Math.log(2)|0}function ri(e){for(;e.length%4!=0;)e.push(0);let t=0;for(let n=0;n<e.length;n+=4)t+=(e[n]<<24)+(e[n+1]<<16)+(e[n+2]<<8)+e[n+3];return t%=2**32,t}function ii(e,t,n,r){return new U.Record(`Table Record`,[{name:`tag`,type:`TAG`,value:e===void 0?``:e},{name:`checkSum`,type:`ULONG`,value:t===void 0?0:t},{name:`offset`,type:`ULONG`,value:n===void 0?0:n},{name:`length`,type:`ULONG`,value:r===void 0?0:r}])}function ai(e){let t=new U.Table(`sfnt`,[{name:`version`,type:`TAG`,value:`OTTO`},{name:`numTables`,type:`USHORT`,value:0},{name:`searchRange`,type:`USHORT`,value:0},{name:`entrySelector`,type:`USHORT`,value:0},{name:`rangeShift`,type:`USHORT`,value:0}]);t.tables=e,t.numTables=e.length;let n=2**ni(t.numTables);t.searchRange=16*n,t.entrySelector=ni(n),t.rangeShift=t.numTables*16-t.searchRange;let r=[],i=[],a=t.sizeOf()+ii().sizeOf()*t.numTables;for(;a%4!=0;)a+=1,i.push({name:`padding`,type:`BYTE`,value:0});for(let t=0;t<e.length;t+=1){let n=e[t];P.argument(n.tableName.length===4,`Table name`+n.tableName+` is invalid.`);let o=n.sizeOf(),s=ii(n.tableName,ri(n.encode()),a,o);for(r.push({name:s.tag+` Table Record`,type:`RECORD`,value:s}),i.push({name:n.tableName+` table`,type:`RECORD`,value:n}),a+=o,P.argument(!isNaN(a),`Something went wrong calculating the offset.`);a%4!=0;)a+=1,i.push({name:`padding`,type:`BYTE`,value:0})}return r.sort(function(e,t){return e.value.tag>t.value.tag?1:-1}),t.fields=t.fields.concat(r),t.fields=t.fields.concat(i),t}function oi(e,t,n){for(let n=0;n<t.length;n+=1){let r=e.charToGlyphIndex(t[n]);if(r>0)return e.glyphs.get(r).getMetrics()}return n}function si(e){let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function ci(e){let t=[],n=[],r=[],i=[],a=[],o=[],s=[],c,l=0,u=0,d=0,f=0,p=0;for(let m=0;m<e.glyphs.length;m+=1){let h=e.glyphs.get(m),g=h.unicode|0;if(isNaN(h.advanceWidth))throw Error(`Glyph `+h.name+` (`+m+`): advanceWidth is not a number.`);(c>g||c===void 0)&&g>0&&(c=g),l<g&&(l=g);let _=sr.getUnicodeRange(g);if(_<32)u|=1<<_;else if(_<64)d|=1<<_-32;else if(_<96)f|=1<<_-64;else if(_<123)p|=1<<_-96;else throw Error(`Unicode ranges bits > 123 are reserved for internal usage`);if(h.name===`.notdef`)continue;let v=h.getMetrics();t.push(v.xMin),n.push(v.yMin),r.push(v.xMax),i.push(v.yMax),o.push(v.leftSideBearing),s.push(v.rightSideBearing),a.push(h.advanceWidth)}let m={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,i),advanceWidthMax:Math.max.apply(null,a),advanceWidthAvg:si(a),minLeftSideBearing:Math.min.apply(null,o),maxLeftSideBearing:Math.max.apply(null,o),minRightSideBearing:Math.min.apply(null,s)};m.ascender=e.ascender,m.descender=e.descender;let h=0;e.weightClass>=600&&(h|=e.macStyleValues.BOLD),e.italicAngle<0&&(h|=e.macStyleValues.ITALIC);let g=Hn.make({flags:3,unitsPerEm:e.unitsPerEm,xMin:m.xMin,yMin:m.yMin,xMax:m.xMax,yMax:m.yMax,lowestRecPPEM:3,macStyle:h,createdTimestamp:e.createdTimestamp}),_=Gn.make({ascender:m.ascender,descender:m.descender,advanceWidthMax:m.advanceWidthMax,minLeftSideBearing:m.minLeftSideBearing,minRightSideBearing:m.minRightSideBearing,xMaxExtent:m.maxLeftSideBearing+(m.xMax-m.xMin),numberOfHMetrics:e.glyphs.length}),v=nr.make(e.glyphs.length),y=sr.make(Object.assign({xAvgCharWidth:Math.round(m.advanceWidthAvg),usFirstCharIndex:c,usLastCharIndex:l,ulUnicodeRange1:u,ulUnicodeRange2:d,ulUnicodeRange3:f,ulUnicodeRange4:p,sTypoAscender:m.ascender,sTypoDescender:m.descender,sTypoLineGap:0,usWinAscent:m.yMax,usWinDescent:Math.abs(m.yMin),ulCodePageRange1:1,sxHeight:oi(e,`xyvw`,{yMax:Math.round(m.ascender/2)}).yMax,sCapHeight:oi(e,`HIKLEFJMNTZBDPRAGOQSUVWXY`,m).yMax,usDefaultChar:e.hasChar(` `)?32:0,usBreakChar:e.hasChar(` `)?32:0},e.tables.os2)),b=Xn.make(e.glyphs),x=pt.make(e.glyphs),S=e.getEnglishName(`fontFamily`),C=e.getEnglishName(`fontSubfamily`),w=S+` `+C,T=e.getEnglishName(`postScriptName`);T||=S.replace(/\s/g,``)+`-`+C;let E={};for(let t in e.names)E[t]=e.names[t];E.unicode=E.unicode||{},E.macintosh=E.macintosh||{},E.windows=E.windows||{};let D=e.names.unicode||{},O=e.names.macintosh||{},k=e.names.windows||{};for(let t in E){if(E[t]=E[t]||{},!E[t].uniqueID){let n=e.getEnglishName(`manufacturer`)||``;E[t].uniqueID={en:`${n}: ${w}`}}E[t].postScriptName||(E[t].postScriptName={en:T})}E.unicode.preferredFamily||(E.unicode.preferredFamily=D.fontFamily||O.fontFamily||k.fontFamily),E.macintosh.preferredFamily||(E.macintosh.preferredFamily=O.fontFamily||D.fontFamily||k.fontFamily),E.windows.preferredFamily||(E.windows.preferredFamily=k.fontFamily||D.fontFamily||O.fontFamily),E.unicode.preferredSubfamily||(E.unicode.preferredSubfamily=D.fontSubfamily||O.fontSubfamily||k.fontSubfamily),E.macintosh.preferredSubfamily||(E.macintosh.preferredSubfamily=O.fontSubfamily||D.fontSubfamily||k.fontSubfamily),E.windows.preferredSubfamily||(E.windows.preferredSubfamily=k.fontSubfamily||D.fontSubfamily||O.fontSubfamily);let ee=[],te=at.make(E,ee),ne=ee.length>0?$n.make(ee):void 0,re=ur.make(e),A=zn.make(e.glyphs,{version:e.getEnglishName(`version`),fullName:w,familyName:S,weightName:C,postScriptName:T,unitsPerEm:e.unitsPerEm,fontBBox:[0,m.yMin,m.ascender,m.advanceWidthMax],topDict:e.tables.cff&&e.tables.cff.topDict||{}}),j=e.metas&&Object.keys(e.metas).length>0?yr.make(e.metas):void 0,M=[g,_,v,y,te,x,re,A,b];ne&&M.push(ne);let ie={gsub:gr,cpal:zt,colr:Sr,stat:Rr,avar:Ur,cvar:Kr,fvar:kr,gvar:Yr,gasp:Qr,svg:ti},ae={avar:[e.tables.fvar],fvar:[e.names]};for(let t in ie){let n=e.tables[t];if(n){let r=ie[t].make.call(e,n,...ae[t]||[]);r&&M.push(r)}}j&&M.push(j);let oe=ai(M),N=ri(oe.encode()),se=oe.fields,ce=!1;for(let e=0;e<se.length;e+=1)if(se[e].name===`head table`){se[e].value.checkSumAdjustment=2981146554-N,ce=!0;break}if(!ce)throw Error(`Could not find head table with checkSum to adjust.`);return oe}var li={make:ai,fontToTable:ci,computeCheckSum:ri};function ui(e,t){let n=0,r=e.length-1;for(;n<=r;){let i=n+r>>>1,a=e[i].tag;if(a===t)return i;a<t?n=i+1:r=i-1}return-n-1}function di(e,t){let n=0,r=e.length-1;for(;n<=r;){let i=n+r>>>1,a=e[i];if(a===t)return i;a<t?n=i+1:r=i-1}return-n-1}function fi(e,t){let n,r=0,i=e.length-1;for(;r<=i;){let a=r+i>>>1;n=e[a];let o=n.start;if(o===t)return n;o<t?r=a+1:i=a-1}if(r>0)return n=e[r-1],t>n.end?0:n}function pi(e,t){this.font=e,this.tableName=t}pi.prototype={searchTag:ui,binSearch:di,getTable:function(e){let t=this.font.tables[this.tableName];return!t&&e&&(t=this.font.tables[this.tableName]=this.createDefaultTable()),t},getScriptNames:function(){let e=this.getTable();return e?e.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){let e=this.getTable();if(!e)return;let t=!1;for(let n=0;n<e.scripts.length;n++){let r=e.scripts[n].tag;if(r===`DFLT`)return r;r===`latn`&&(t=!0)}if(t)return`latn`},getScriptTable:function(e,t){let n=this.getTable(t);if(n){e||=`DFLT`;let r=n.scripts,i=ui(n.scripts,e);if(i>=0)return r[i].script;if(t){let t={tag:e,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return r.splice(-1-i,0,t),t.script}}},getLangSysTable:function(e,t,n){let r=this.getScriptTable(e,n);if(r){if(!t||t===`dflt`||t===`DFLT`)return r.defaultLangSys;let e=ui(r.langSysRecords,t);if(e>=0)return r.langSysRecords[e].langSys;if(n){let n={tag:t,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return r.langSysRecords.splice(-1-e,0,n),n.langSys}}},getFeatureTable:function(e,t,n,r){let i=this.getLangSysTable(e,t,r);if(i){let e,t=i.featureIndexes,a=this.font.tables[this.tableName].features;for(let r=0;r<t.length;r++)if(e=a[t[r]],e.tag===n)return e.feature;if(r){let r=a.length;return P.assert(r===0||n>=a[r-1].tag,`Features must be added in alphabetical order.`),e={tag:n,feature:{params:0,lookupListIndexes:[]}},a.push(e),t.push(r),e.feature}}},getLookupTables:function(e,t,n,r,i){let a=this.getFeatureTable(e,t,n,i),o=[];if(a){let e,t=a.lookupListIndexes,n=this.font.tables[this.tableName].lookups;for(let i=0;i<t.length;i++)e=n[t[i]],e.lookupType===r&&o.push(e);if(o.length===0&&i){e={lookupType:r,lookupFlag:0,subtables:[],markFilteringSet:void 0};let i=n.length;return n.push(e),t.push(i),[e]}}return o},getGlyphClass:function(e,t){switch(e.format){case 1:return e.startGlyph<=t&&t<e.startGlyph+e.classes.length?e.classes[t-e.startGlyph]:0;case 2:{let n=fi(e.ranges,t);return n?n.classId:0}}},getCoverageIndex:function(e,t){switch(e.format){case 1:{let n=di(e.glyphs,t);return n>=0?n:-1}case 2:{let n=fi(e.ranges,t);return n?n.index+t-n.start:-1}}},expandCoverage:function(e){if(e.format===1)return e.glyphs;{let t=[],n=e.ranges;for(let e=0;e<n.length;e++){let r=n[e],i=r.start,a=r.end;for(let e=i;e<=a;e++)t.push(e)}return t}}};var mi=pi;function hi(e){mi.call(this,e,`gpos`)}hi.prototype=mi.prototype,hi.prototype.init=function(){let e=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(e)},hi.prototype.getKerningValue=function(e,t,n){for(let r=0;r<e.length;r++){let i=e[r].subtables;for(let e=0;e<i.length;e++){let r=i[e],a=this.getCoverageIndex(r.coverage,t);if(!(a<0))switch(r.posFormat){case 1:{let e=r.pairSets[a];for(let t=0;t<e.length;t++){let r=e[t];if(r.secondGlyph===n)return r.value1&&r.value1.xAdvance||0}break}case 2:{let e=this.getGlyphClass(r.classDef1,t),i=this.getGlyphClass(r.classDef2,n),a=r.classRecords[e][i];return a.value1&&a.value1.xAdvance||0}}}}return 0},hi.prototype.getKerningTables=function(e,t){if(this.font.tables.gpos)return this.getLookupTables(e,t,`kern`,2)};var gi=hi;function _i(e,t){let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function vi(e,t,n){let r=0,i=e.length-1,a=null;for(;r<=i;){let o=Math.floor((r+i)/2),s=e[o],c=s[t];if(c<n)r=o+1;else if(c>n)i=o-1;else{a=s;break}}return a}function yi(e,t,n){let r=0,i=e.length-1;for(;r<=i;){let a=Math.floor((r+i)/2),o=e[a];if(o[t]<n)r=a+1;else if(o[t]>n)i=a-1;else return a}return-1}function bi(e,t,n){let r=0,i=e.length,a=(e,n)=>e[t]-n[t];for(;r<i;){let t=r+i>>>1;a(e[t],n)<0?r=t+1:i=t}return e.splice(r,0,n),r}function xi(e){return e[0]===31&&e[1]===139&&e[2]===8}function Si(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=10,r=e.byteLength-8,i=t.getInt8(3);if(i&4&&(n+=2+t.getUint16(n,!0)),i&8)for(;n<r&&e[n++]!==0;);if(i&16)for(;n<r&&e[n++]!==0;);if(i&2&&(n+=2),n>=r)throw Error(`Can't find compressed blocks`);let a=t.getUint32(t.byteLength-4,!0);return te(e.subarray(n,r),new Uint8Array(a))}function Ci(e){return{x:e.x,y:e.y,onCurve:e.onCurve,lastPointOfContour:e.lastPointOfContour}}function wi(e){return{glyphIndex:e.glyphIndex,xScale:e.xScale,scale01:e.scale01,scale10:e.scale10,yScale:e.yScale,dx:e.dx,dy:e.dy}}function Ti(e){mi.call(this,e,`gsub`)}function Ei(e,t,n){let r=e.subtables;for(let e=0;e<r.length;e++){let n=r[e];if(n.substFormat===t)return n}if(n)return r.push(n),n}Ti.prototype=mi.prototype,Ti.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:`DFLT`,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},Ti.prototype.getSingle=function(e,t,n){let r=[],i=this.getLookupTables(t,n,e,1);for(let e=0;e<i.length;e++){let t=i[e].subtables;for(let e=0;e<t.length;e++){let n=t[e],i=this.expandCoverage(n.coverage),a;if(n.substFormat===1){let e=n.deltaGlyphId;for(a=0;a<i.length;a++){let t=i[a];r.push({sub:t,by:t+e})}}else{let e=n.substitute;for(a=0;a<i.length;a++)r.push({sub:i[a],by:e[a]})}}}return r},Ti.prototype.getMultiple=function(e,t,n){let r=[],i=this.getLookupTables(t,n,e,2);for(let e=0;e<i.length;e++){let t=i[e].subtables;for(let e=0;e<t.length;e++){let n=t[e],i=this.expandCoverage(n.coverage),a;for(a=0;a<i.length;a++){let e=i[a],t=n.sequences[a];r.push({sub:e,by:t})}}}return r},Ti.prototype.getAlternates=function(e,t,n){let r=[],i=this.getLookupTables(t,n,e,3);for(let e=0;e<i.length;e++){let t=i[e].subtables;for(let e=0;e<t.length;e++){let n=t[e],i=this.expandCoverage(n.coverage),a=n.alternateSets;for(let e=0;e<i.length;e++)r.push({sub:i[e],by:a[e]})}}return r},Ti.prototype.getLigatures=function(e,t,n){let r=[],i=this.getLookupTables(t,n,e,4);for(let e=0;e<i.length;e++){let t=i[e].subtables;for(let e=0;e<t.length;e++){let n=t[e],i=this.expandCoverage(n.coverage),a=n.ligatureSets;for(let e=0;e<i.length;e++){let t=i[e],n=a[e];for(let e=0;e<n.length;e++){let i=n[e];r.push({sub:[t].concat(i.components),by:i.ligGlyph})}}}}return r},Ti.prototype.addSingle=function(e,t,n,r){let i=this.getLookupTables(n,r,e,1,!0)[0],a=Ei(i,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});P.assert(a.coverage.format===1,`Single: unable to modify coverage table format `+a.coverage.format);let o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.substitute.splice(s,0,0)),a.substitute[s]=t.by},Ti.prototype.addMultiple=function(e,t,n,r){P.assert(t.by instanceof Array&&t.by.length>1,`Multiple: "by" must be an array of two or more ids`);let i=this.getLookupTables(n,r,e,2,!0)[0],a=Ei(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});P.assert(a.coverage.format===1,`Multiple: unable to modify coverage table format `+a.coverage.format);let o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.sequences.splice(s,0,0)),a.sequences[s]=t.by},Ti.prototype.addAlternate=function(e,t,n,r){let i=this.getLookupTables(n,r,e,3,!0)[0],a=Ei(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});P.assert(a.coverage.format===1,`Alternate: unable to modify coverage table format `+a.coverage.format);let o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.alternateSets.splice(s,0,0)),a.alternateSets[s]=t.by},Ti.prototype.addLigature=function(e,t,n,r){let i=this.getLookupTables(n,r,e,4,!0)[0],a=i.subtables[0];a||(a={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},i.subtables[0]=a),P.assert(a.coverage.format===1,`Ligature: unable to modify coverage table format `+a.coverage.format);let o=t.sub[0],s=t.sub.slice(1),c={ligGlyph:t.by,components:s},l=this.binSearch(a.coverage.glyphs,o);if(l>=0){let e=a.ligatureSets[l];for(let t=0;t<e.length;t++)if(_i(e[t].components,s))return;e.push(c)}else l=-1-l,a.coverage.glyphs.splice(l,0,o),a.ligatureSets.splice(l,0,[c])},Ti.prototype.getFeature=function(e,t,n){if(/ss\d\d/.test(e))return this.getSingle(e,t,n);switch(e){case`aalt`:case`salt`:return this.getSingle(e,t,n).concat(this.getAlternates(e,t,n));case`dlig`:case`liga`:case`rlig`:return this.getLigatures(e,t,n);case`ccmp`:return this.getMultiple(e,t,n).concat(this.getLigatures(e,t,n));case`stch`:return this.getMultiple(e,t,n)}},Ti.prototype.add=function(e,t,n,r){if(/ss\d\d/.test(e))return this.addSingle(e,t,n,r);switch(e){case`aalt`:case`salt`:return typeof t.by==`number`?this.addSingle(e,t,n,r):this.addAlternate(e,t,n,r);case`dlig`:case`liga`:case`rlig`:return this.addLigature(e,t,n,r);case`ccmp`:return t.by instanceof Array?this.addMultiple(e,t,n,r):this.addLigature(e,t,n,r)}};var Di=Ti,Oi=class{constructor(e){this.defaultValue=255,this.font=e}cpal(){return this.font.tables&&this.font.tables.cpal?this.font.tables.cpal:!1}getAll(e){let t=[],n=this.cpal();if(!n)return t;for(let r=0;r<n.colorRecordIndices.length;r++){let i=n.colorRecordIndices[r],a=[];for(let t=i;t<i+n.numPaletteEntries;t++)a.push(Rt(n.colorRecords[t],e||`hexa`));t.push(a)}return t}toCPALcolor(e){return Array.isArray(e)?e.map(e=>Lt(e,`raw`)):Lt(e,`raw`)}fillPalette(e,t=[],n=this.cpal().numPaletteEntries){return e=Number.isInteger(e)?this.get(e,`raw`):e,Object.assign(Array(n).fill(this.defaultValue),this.toCPALcolor(e).concat(this.toCPALcolor(t)))}extend(e){if(this.ensureCPAL(Array(e).fill(this.defaultValue)))return;let t=this.cpal(),n=t.numPaletteEntries+e,r=this.getAll().map(e=>this.fillPalette(e,[],n));t.numPaletteEntries=n,t.colorRecords=this.toCPALcolor(r.flat()),this.updateIndices()}get(e,t=`hexa`){return this.getAll(t)[e]||null}getColor(e,t=0,n=`hexa`){return Mt(this.font,e,t,n)}setColor(e,t,n=0){e=parseInt(e),n=parseInt(n);let r=this.getAll(`raw`),i=r[n];if(!i)throw Error(`paletteIndex ${n} out of range`);let a=this.cpal(),o=a.numPaletteEntries;Array.isArray(t)||(t=[t]),t.length+e>o&&(this.extend(t.length+e-o),r=this.getAll(`raw`),i=r[n]);for(let n=0;n<t.length;n++)i[n+e]=this.toCPALcolor(t[n]);a.colorRecords=r.flat(),this.updateIndices()}add(e){if(this.ensureCPAL(e))return;let t=this.cpal(),n=t.numPaletteEntries;e&&e.length?(e=this.toCPALcolor(e),e.length>n?this.extend(e.length-n):e.length<n&&(e=this.fillPalette(e)),t.colorRecordIndices.push(t.colorRecords.length),t.colorRecords.push(...e)):(t.colorRecordIndices.push(t.colorRecords.length),t.colorRecords.push(...Array(n).fill(this.defaultValue)))}delete(e){let t=this.getAll(`raw`);delete t[e];let n=this.cpal();n.colorRecordIndices.pop(),n.colorRecords=t.flat()}deleteColor(e,t){if(e===t)throw Error(`replacementIndex cannot be the same as colorIndex`);let n=this.cpal(),r=this.getAll(`raw`),i=[];if(t>n.numPaletteEntries-1)throw Error(`Replacement index out of range: numPaletteEntries after deletion: ${n.numPaletteEntries-1}, replacementIndex: ${t})`);for(let t=0;t<r.length;t++){let n=r[t].filter((t,n)=>n!==e);i.push(n)}let a=this.font.tables.colr;if(a){let n=a.layerRecords;for(let i=0;i<n.length;i++){let a=n[i].paletteIndex;if(a>e)--n[i].paletteIndex;else if(a===e){let a=0;for(let n=0;n<r.length;n++)if(t>e&&t<=e+r[n].length){a++;break}n[i].paletteIndex=t-a}}this.font.tables.colr={...a,layerRecords:n}}let o=i.flat();for(let e=0;e<r.length;e++)n.colorRecordIndices[e]-=e;n.numPaletteEntries=Math.max(0,n.numPaletteEntries-1),n.colorRecords=this.toCPALcolor(o)}ensureCPAL(e){return!this.cpal()&&(e=!e||!e.length?[this.defaultValue]:this.toCPALcolor(e),this.font.tables.cpal={version:0,numPaletteEntries:e.length,colorRecords:e,colorRecordIndices:[0]},!0)}updateIndices(){let e=this.cpal(),t=Math.ceil(e.colorRecords.length/e.numPaletteEntries);e.colorRecordIndices=[];for(let n=0;n<t;n++)e.colorRecordIndices.push(n*e.numPaletteEntries)}},ki=class{constructor(e){this.font=e}ensureCOLR(){return this.font.tables.colr||(this.font.tables.colr={version:0,baseGlyphRecords:[],layerRecords:[]}),this.font}get(e){let t=this.font,n=[],r=t.tables.colr,i=t.tables.cpal;if(!r||!i)return n;let a=vi(r.baseGlyphRecords,`glyphID`,e);if(!a)return n;let o=a.firstLayerIndex,s=a.numLayers;for(let e=0;e<s;e++){let i=r.layerRecords[o+e];n.push({glyph:t.glyphs.get(i.glyphID),paletteIndex:i.paletteIndex})}return n}add(e,t,n){let r=this.get(e);t=Array.isArray(t)?t:[t],n===void 0||n===1/0||n>r.length?n=r.length:n<0&&(n=r.length+1+n%(r.length+1),n>=r.length+1&&(n-=r.length+1));let i=[];for(let e=0;e<n;e++){let t=Number.isInteger(r[e].glyph)?r[e].glyph:r[e].glyph.index;i.push({glyphID:t,paletteIndex:r[e].paletteIndex})}for(let e of t){let t=Number.isInteger(e.glyph)?e.glyph:e.glyph.index;i.push({glyphID:t,paletteIndex:e.paletteIndex})}for(let e=n;e<r.length;e++){let t=Number.isInteger(r[e].glyph)?r[e].glyph:r[e].glyph.index;i.push({glyphID:t,paletteIndex:r[e].paletteIndex})}this.updateColrTable(e,i)}setPaletteIndex(e,t,n){let r=this.get(e);r[t]?(r=r.map((e,r)=>({glyphID:e.glyph.index,paletteIndex:r===t?n:e.paletteIndex})),this.updateColrTable(e,r)):console.error(`Invalid layer index`)}remove(e,t,n=t){let r=this.get(e);r=r.map(e=>({glyphID:e.glyph.index,paletteIndex:e.paletteIndex})),r.splice(t,n-t+1),this.updateColrTable(e,r)}updateColrTable(e,t){this.ensureCOLR();let n=this.font.tables.colr,r=yi(n.baseGlyphRecords,`glyphID`,e);if(r===-1){let t={glyphID:e,firstLayerIndex:n.layerRecords.length,numLayers:0};r=bi(n.baseGlyphRecords,`glyphID`,t)}let i=n.baseGlyphRecords[r],a=i.numLayers,o=t.length,s=o-a;if(s>0){let e=t.slice(a).map(e=>({glyphID:e.glyphID,paletteIndex:e.paletteIndex}));n.layerRecords.splice(i.firstLayerIndex+a,0,...e)}else s<0&&n.layerRecords.splice(i.firstLayerIndex+o,-s);for(let e=0;e<Math.min(a,o);e++)n.layerRecords[i.firstLayerIndex+e]={glyphID:t[e].glyphID,paletteIndex:t[e].paletteIndex};if(i.numLayers=o,s!==0)for(let e=0;e<n.baseGlyphRecords.length;e++){let t=n.baseGlyphRecords[e];e===r||t.firstLayerIndex<i.firstLayerIndex||(n.baseGlyphRecords[e].firstLayerIndex+=s)}}},Ai=class{constructor(e){this.font=e,this.cache=new WeakMap}get(e){let t=this.getOrCreateSvgImageCacheEntry(e);return t&&t.image}getAsync(e){let t=this.getOrCreateSvgImageCacheEntry(e);return t&&t.promise}getOrCreateSvgImageCacheEntry(e){let t=this.font.tables.svg;if(t===void 0)return;let n=t.get(e);if(n===void 0)return;let r=this.cache.get(n);r===void 0&&(r=ji(n),this.cache.set(n,r));let i=r.images.get(e);return i===void 0&&(i=Mi(this.font,r.template,e),i.promise.then(t=>{if(i.image=t,typeof this.font.onGlyphUpdated==`function`)try{this.font.onGlyphUpdated(e)}catch(t){console.error(`font.onGlyphUpdated`,e,t)}}),r.images.set(e,i)),i}};function ji(e){return{template:Ni(e).then(Ii),images:new Map}}function Mi(e,t,n){return{promise:t.then(t=>{let r;typeof t==`string`?r=t:(t[4]=n,r=t.join(``));let i=Li(r,e.unitsPerEm);return i.image.decode().then(()=>i)}),image:void 0}}var Ni=typeof DecompressionStream==`function`?Fi:Pi;function Pi(e){try{return Promise.resolve(new TextDecoder().decode(xi(e)?Si(e):e))}catch(e){return Promise.reject(e)}}function Fi(e){if(xi(e))return new Response(new Response(e).body.pipeThrough(new DecompressionStream(`gzip`))).text();try{return Promise.resolve(new TextDecoder().decode(e))}catch(e){return Promise.reject(e)}}function Ii(e){let t=e.indexOf(`<svg`),n=e.indexOf(`>`,t+4)+1;if(/ id=['"]glyph\d+['"]/.test(e.substring(t,n)))return e;let r=e.lastIndexOf(`</svg>`);return[e.substring(0,n),`<defs>`,e.substring(n,r),`</defs><use href="#glyph`,``,`"/>`,e.substring(r)]}function Li(e,t){let n=new DOMParser().parseFromString(e,`image/svg+xml`).documentElement,r=n.viewBox.baseVal,i=n.width.baseVal,a=n.height.baseVal,o=1,s=1;r.width>0&&r.height>0&&(i.unitType===1?(o=i.valueInSpecifiedUnits/r.width,s=a.unitType===1?a.valueInSpecifiedUnits/r.height:o):a.unitType===1?(s=a.valueInSpecifiedUnits/r.height,o=s):t&&(o=t/r.width,s=t/r.height));let c=document.createElement(`div`);c.style.position=`fixed`,c.style.visibility=`hidden`,c.appendChild(n),document.body.appendChild(c);let l=n.getBBox();document.body.removeChild(c);let u=(l.x-r.x)*o,d=(r.y-l.y)*s,f=l.width*o,p=l.height*s;n.setAttribute(`viewBox`,[l.x,l.y,l.width,l.height].join(` `)),o!==1&&n.setAttribute(`width`,f),s!==1&&n.setAttribute(`height`,p);let m=new Image(f,p);return m.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(n.outerHTML),{leftSideBearing:u,baseline:d,image:m}}var Ri=new WeakMap;function zi(e,t,n,r,i){let a;return(t&r)>0?(a=e.parseByte(),(t&i)===0&&(a=-a),a=n+a):a=(t&i)>0?n:n+e.parseShort(),a}function Bi(e,t,n){let r=new G.Parser(t,n);e._numberOfContours=r.parseShort(),e._xMin=r.parseShort(),e._yMin=r.parseShort(),e._xMax=r.parseShort(),e._yMax=r.parseShort();let i,a;if(e._numberOfContours>0){let t=e.endPointIndices=[];for(let n=0;n<e._numberOfContours;n+=1)t.push(r.parseUShort());e.instructionLength=r.parseUShort(),e.instructions=[];for(let t=0;t<e.instructionLength;t+=1)e.instructions.push(r.parseByte());let n=t[t.length-1]+1;i=[];for(let e=0;e<n;e+=1)if(a=r.parseByte(),i.push(a),(a&8)>0){let t=r.parseByte();for(let n=0;n<t;n+=1)i.push(a),e+=1}if(P.argument(i.length===n,`Bad flags.`),t.length>0){let o=[],s;if(n>0){for(let e=0;e<n;e+=1)a=i[e],s={},s.onCurve=!!(a&1),s.lastPointOfContour=t.indexOf(e)>=0,o.push(s);let e=0;for(let t=0;t<n;t+=1)a=i[t],s=o[t],s.x=zi(r,a,e,2,16),e=s.x;let c=0;for(let e=0;e<n;e+=1)a=i[e],s=o[e],s.y=zi(r,a,c,4,32),c=s.y}e.points=o}else e.points=[]}else if(e._numberOfContours===0)e.points=[];else{e.isComposite=!0,e.points=[],e.components=[];let t=!0;for(;t;){i=r.parseUShort();let n={glyphIndex:r.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(i&1)>0?(i&2)>0?(n.dx=r.parseShort(),n.dy=r.parseShort()):n.matchedPoints=[r.parseUShort(),r.parseUShort()]:(i&2)>0?(n.dx=r.parseChar(),n.dy=r.parseChar()):n.matchedPoints=[r.parseByte(),r.parseByte()],(i&8)>0?n.xScale=n.yScale=r.parseF2Dot14():(i&64)>0?(n.xScale=r.parseF2Dot14(),n.yScale=r.parseF2Dot14()):(i&128)>0&&(n.xScale=r.parseF2Dot14(),n.scale01=r.parseF2Dot14(),n.scale10=r.parseF2Dot14(),n.yScale=r.parseF2Dot14()),e.components.push(n),t=!!(i&32)}if(i&256){e.instructionLength=r.parseUShort(),e.instructions=[];for(let t=0;t<e.instructionLength;t+=1)e.instructions.push(r.parseByte())}}}function Vi(e,t){let n=[];for(let r=0;r<e.length;r+=1){let i=e[r],a={x:t.xScale*i.x+t.scale10*i.y+t.dx,y:t.scale01*i.x+t.yScale*i.y+t.dy,onCurve:i.onCurve,lastPointOfContour:i.lastPointOfContour};n.push(a)}return n}function Hi(e){let t=[],n=[];for(let r=0;r<e.length;r+=1){let i=e[r];n.push(i),i.lastPointOfContour&&(t.push(n),n=[])}return P.argument(n.length===0,`There are still points left in the current contour.`),t}function Ui(e){let t=new se;if(!e)return t;let n=Hi(e);for(let e=0;e<n.length;++e){let r=n[e],i=r[r.length-1],a=r[0];if(i.onCurve)t.moveTo(i.x,i.y);else if(a.onCurve)t.moveTo(a.x,a.y);else{let e={x:(i.x+a.x)*.5,y:(i.y+a.y)*.5};t.moveTo(e.x,e.y)}for(let e=0;e<r.length;++e)if(i=a,a=r[(e+1)%r.length],i.onCurve)t.lineTo(i.x,i.y);else{let e=a;a.onCurve||(e={x:(i.x+a.x)*.5,y:(i.y+a.y)*.5}),t.quadraticCurveTo(i.x,i.y,e.x,e.y)}t.closePath()}return t}function Wi(e,t){if(t.isComposite){Ri.has(e)||Ri.set(e,new Set);let n=Ri.get(e);n.add(t.index);try{for(let r=0;r<t.components.length;r+=1){let i=t.components[r];if(n.has(i.glyphIndex))continue;let a=e.get(i.glyphIndex);if(a.getPath(),a.points){let e;if(i.matchedPoints===void 0)e=Vi(a.points,i);else{if(i.matchedPoints[0]>t.points.length-1||i.matchedPoints[1]>a.points.length-1)throw Error(`Matched points out of range in `+t.name);let n=t.points[i.matchedPoints[0]],r=a.points[i.matchedPoints[1]],o={xScale:i.xScale,scale01:i.scale01,scale10:i.scale10,yScale:i.yScale,dx:0,dy:0};r=Vi([r],o)[0],o.dx=n.x-r.x,o.dy=n.y-r.y,e=Vi(a.points,o)}t.points=t.points.concat(e)}}}finally{n.delete(t.index)}}return Ui(t.points)}function Gi(e,t,n,r){let i=new Jt.GlyphSet(r);for(let a=0;a<n.length-1;a+=1){let o=n[a];o===n[a+1]?i.push(a,Jt.glyphLoader(r,a)):i.push(a,Jt.ttfGlyphLoader(r,a,Bi,e,t+o,Wi))}return i}function Ki(e,t,n,r){let i=new Jt.GlyphSet(r);return r._push=function(a){let o=n[a];o===n[a+1]?i.push(a,Jt.glyphLoader(r,a)):i.push(a,Jt.ttfGlyphLoader(r,a,Bi,e,t+o,Wi))},i}function qi(e,t,n,r,i){return i.lowMemory?Ki(e,t,n,r):Gi(e,t,n,r)}var Ji={getPath:Ui,parse:qi},Yi=class{constructor(e){this.font=e}normalizeCoordTags(e){for(let t in e)if(t.length<4){let n=t.padEnd(4,` `);e[n]===void 0&&(e[n]=e[t]),delete e[t]}}getNormalizedCoords(e){e||=this.font.variation.get();let t=[];this.normalizeCoordTags(e);for(let n=0;n<this.fvar().axes.length;n++){let r=this.fvar().axes[n],i=e[r.tag];i===void 0&&(i=r.defaultValue),i<r.defaultValue?t.push((i-r.defaultValue+2**-52)/(r.defaultValue-r.minValue+2**-52)):t.push((i-r.defaultValue+2**-52)/(r.maxValue-r.defaultValue+2**-52))}if(this.avar())for(let e=0;e<this.avar().axisSegmentMaps.length;e++){let n=this.avar().axisSegmentMaps[e];for(let r=0;r<n.axisValueMaps.length;r++){let i=n.axisValueMaps[r];if(r>=1&&t[e]<i.fromCoordinate){let a=n.axisValueMaps[r-1];t[e]=((t[e]-a.fromCoordinate)*(i.toCoordinate-a.toCoordinate)+2**-52)/(i.fromCoordinate-a.fromCoordinate+2**-52)+a.toCoordinate;break}}}return t}interpolatePoints(e,t,n){if(e.length===0)return;let r=0;for(;r<e.length;){let i=r,a=r,o=e[a];for(;!o.lastPointOfContour;)o=e[++a];for(;r<=a&&!n[r];)r++;if(r>a)continue;let s=r,c=r;for(r++;r<=a;)n[r]&&(this.deltaInterpolate(c+1,r-1,c,r,t,e),c=r),r++;c===s?this.deltaShift(i,a,c,t,e):(this.deltaInterpolate(c+1,a,c,s,t,e),s>0&&this.deltaInterpolate(i,s-1,c,s,t,e)),r=a+1}}deltaInterpolate(e,t,n,r,i,a){if(e>t)return;let o=[`x`,`y`];for(let c=0;c<o.length;c++){let l=o[c];if(i[n][l]>i[r][l]){var s=n;n=r,r=s}let u=i[n][l],d=i[r][l],f=a[n][l],p=a[r][l];if(u!==d||f===p){let n=u===d?0:(p-f)/(d-u);for(let r=e;r<=t;r++){let e=i[r][l];e<=u?e+=f-u:e>=d?e+=p-d:e=f+(e-u)*n,a[r][l]=e}}}}deltaShift(e,t,n,r,i){let a=i[n].x-r[n].x,o=i[n].y-r[n].y;if(a!==0||o!==0)for(let r=e;r<=t;r++)r!==n&&(i[r].x+=a,i[r].y+=o)}transformComponents(e,t,n,r,i,a){let o=0;for(let s=0;s<e.components.length;s++){let c=e.components[s],l=this.font.glyphs.get(c.glyphIndex),u=wi(c),d=r.indexOf(s);d>-1&&(u.dx+=Math.round(i.deltas[d]*a),u.dy+=Math.round(i.deltasY[d]*a));let f=Vi(this.getTransform(l,n).points,u);t.splice(o,f.length,...f),o+=l.points.length}}applyTupleVariationStore(e,t,n,r=`gvar`,i={}){n||=this.font.variation.get();let a=this.getNormalizedCoords(n),{headers:o,sharedPoints:s}=e,c=this.fvar().axes.length,l;r===`gvar`?l=t.map(Ci):r===`cvar`&&(l=[...t]);for(let e=0;e<o.length;e++){let u=o[e],d=1;for(let e=0;e<c;e++){let t=[0];switch(r){case`gvar`:t=u.peakTuple?u.peakTuple:this.gvar().sharedTuples[u.sharedTupleRecordsIndex];break;case`cvar`:t=u.peakTuple}if(t[e]!==0){if(a[e]===0){d=0;break}if(!u.intermediateStartTuple){if(a[e]<Math.min(0,t[e])||a[e]>Math.max(0,t[e])){d=0;break}d=(d*a[e]+2**-52)/(t[e]+2**-52)}else if(a[e]<u.intermediateStartTuple[e]||a[e]>u.intermediateEndTuple[e]){d=0;break}else d=a[e]<t[e]?d*(a[e]-u.intermediateStartTuple[e]+2**-52)/(t[e]-u.intermediateStartTuple[e]+2**-52):d*(u.intermediateEndTuple[e]-a[e]+2**-52)/(u.intermediateEndTuple[e]-t[e]+2**-52)}}if(d===0)continue;let f=u.privatePoints.length?u.privatePoints:s;if(r===`gvar`&&i.glyph&&i.glyph.isComposite)this.transformComponents(i.glyph,l,n,f,u,d);else if(f.length===0)for(let e=0;e<l.length;e++){let t=l[e];r===`gvar`?l[e]={x:Math.round(t.x+u.deltas[e]*d),y:Math.round(t.y+u.deltasY[e]*d),onCurve:t.onCurve,lastPointOfContour:t.lastPointOfContour}:r===`cvar`&&(l[e]=Math.round(t+u.deltas[e]*d))}else{let e;r===`gvar`?e=l.map(Ci):r===`cvar`&&(e=l);let n=Array(t.length).fill(!1);for(let i=0;i<f.length;i++){let a=f[i];if(a<t.length){let t=e[a];r===`gvar`?(n[a]=!0,t.x+=u.deltas[i]*d,t.y+=u.deltasY[i]*d):r===`cvar`&&(l[a]=Math.round(t+u.deltas[i]*d))}}if(r===`gvar`){this.interpolatePoints(e,l,n);for(let n=0;n<t.length;n++){let t=e[n].x-l[n].x,r=e[n].y-l[n].y;l[n].x=Math.round(l[n].x+t),l[n].y=Math.round(l[n].y+r)}}}}return l}getTransform(e,t){Number.isInteger(e)&&(e=this.font.glyphs.get(e));let n=e.getBlendPath,r=!!(e.points&&e.points.length),i=e;if(n||r){if(t||=this.font.variation.get(),r){let n=this.gvar()&&this.gvar().glyphVariations[e.index];if(n){let r=e.points,a=this.applyTupleVariationStore(n,r,t,`gvar`,{glyph:e});i=new Ht(Object.assign({},e,{points:a,path:Ui(a)}))}}else if(n){let n=e.getBlendPath(t);i=new Ht(Object.assign({},e,{path:n}))}}return this.font.tables.hvar&&(e._advanceWidth=e._advanceWidth===void 0?e.advanceWidth:e._advanceWidth,e.advanceWidth=i.advanceWidth=Math.round(e._advanceWidth+this.getVariableAdjustment(i.index,`hvar`,`advanceWidth`,t)),e._leftSideBearing=e._leftSideBearing===void 0?e.leftSideBearing:e._leftSideBearing,e.leftSideBearing=i.leftSideBearing=Math.round(e._leftSideBearing+this.getVariableAdjustment(i.index,`hvar`,`lsb`,t))),i}getCvarTransform(e){let t=this.font.tables.cvt,n=this.cvar();return!t||!t.length||!n||!n.headers.length?t:this.applyTupleVariationStore(n,t,e,`cvar`)}getVariableAdjustment(e,t,n,r){r||=this.font.variation.get();let i,a,o=this.font.tables[t];if(!o)throw Error(`trying to get variation adjustment from non-existent table "${o}"`);if(!o.itemVariationStore)throw Error(`trying to get variation adjustment from table "${o}" which does not have an itemVariationStore`);let s=o[n]&&o[n].map.length;if(s){let t=e;t>=s&&(t=s-1),{outerIndex:i,innerIndex:a}=o[n].map[t]}else i=0,a=e;return this.getDelta(o.itemVariationStore,i,a,r)}getDelta(e,t,n,r){if(t>=e.itemVariationSubtables.length)return 0;let i=e.itemVariationSubtables[t];if(n>=i.deltaSets.length)return 0;let a=i.deltaSets[n],o=this.getBlendVector(e,t,r),s=0;for(let e=0;e<i.regionIndexes.length;e++)s+=a[e]*o[e];return s}getBlendVector(e,t,n){n||=this.font.variation.get();let r=e.itemVariationSubtables[t],i=this.getNormalizedCoords(n),a=[];for(let t=0;t<r.regionIndexes.length;t++){let n=1,o=r.regionIndexes[t],s=e.variationRegions[o].regionAxes;for(let e=0;e<s.length;e++){let t=s[e],r;r=t.startCoord>t.peakCoord||t.peakCoord>t.endCoord||t.startCoord<0&&t.endCoord>0&&t.peakCoord!==0||t.peakCoord===0?1:i[e]<t.startCoord||i[e]>t.endCoord?0:i[e]===t.peakCoord?1:i[e]<t.peakCoord?(i[e]-t.startCoord+2**-52)/(t.peakCoord-t.startCoord+2**-52):(t.endCoord-i[e]+2**-52)/(t.endCoord-t.peakCoord+2**-52),n*=r}a[t]=n}return a}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},Xi=class{constructor(e){this.font=e,this.process=new Yi(this.font),this.activateDefaultVariation(),this.getTransform=this.process.getTransform.bind(this.process)}activateDefaultVariation(){let e=this.getDefaultInstanceIndex();e>-1?this.set(e):this.set(this.getDefaultCoordinates())}getDefaultCoordinates(){return this.fvar().axes.reduce((e,t)=>(e[t.tag]=t.defaultValue,e),{})}getDefaultInstanceIndex(){let e=this.getDefaultCoordinates(),t=this.getInstanceIndex(e);return t<0&&(t=this.fvar().instances.findIndex(e=>e.name&&e.name.en===`Regular`)),t}getInstanceIndex(e){return this.fvar().instances.findIndex(t=>Object.keys(e).every(n=>t.coordinates[n]===e[n]))}getInstance(e){return this.fvar().instances&&this.fvar().instances[e]}set(e){let t;if(Number.isInteger(e)){let n=this.getInstance(e);if(!n)throw Error(`Invalid instance index ${e}`);t={...n.coordinates}}else t=e,this.process.normalizeCoordTags(t);t=Object.assign({},this.font.defaultRenderOptions.variation,t),this.font.defaultRenderOptions=Object.assign({},this.font.defaultRenderOptions,{variation:t})}get(){return Object.assign({},this.font.defaultRenderOptions.variation)}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},Zi=1e6,Qi=64,$i=1e4,X,Z,ea,ta;function na(e){this.font=e,this.getCommands=function(e){return Ji.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function ra(e){return e}function ia(e){return Math.sign(e)*Math.round(Math.abs(e))}function aa(e){return Math.sign(e)*Math.round(Math.abs(e*2))/2}function oa(e){return Math.sign(e)*(Math.round(Math.abs(e)+.5)-.5)}function sa(e){return Math.sign(e)*Math.ceil(Math.abs(e))}function ca(e){return Math.sign(e)*Math.floor(Math.abs(e))}var la=function(e){let t=this.srPeriod,n=this.srPhase,r=this.srThreshold,i=1;return e<0&&(e=-e,i=-1),e+=r-n,e=Math.trunc(e/t)*t,e+=n,e<0?n*i:e*i},ua={x:1,y:0,axis:`x`,distance:function(e,t,n,r){return(n?e.xo:e.x)-(r?t.xo:t.x)},interpolate:function(e,t,n,r){let i,a,o,s,c,l,u;if(!r||r===this){if(i=e.xo-t.xo,a=e.xo-n.xo,c=t.x-t.xo,l=n.x-n.xo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.x=e.xo+(c+l)/2;return}e.x=e.xo+(c*s+l*o)/u;return}if(i=r.distance(e,t,!0,!0),a=r.distance(e,n,!0,!0),c=r.distance(t,t,!1,!0),l=r.distance(n,n,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){ua.setRelative(e,e,(c+l)/2,r,!0);return}ua.setRelative(e,e,(c*s+l*o)/u,r,!0)},normalSlope:-1/0,setRelative:function(e,t,n,r,i){if(!r||r===this){e.x=(i?t.xo:t.x)+n;return}let a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x,c=o+n*r.y;e.x=s+(e.y-c)/r.normalSlope},slope:0,touch:function(e){e.xTouched=!0},touched:function(e){return e.xTouched},untouch:function(e){e.xTouched=!1}},da={x:0,y:1,axis:`y`,distance:function(e,t,n,r){return(n?e.yo:e.y)-(r?t.yo:t.y)},interpolate:function(e,t,n,r){let i,a,o,s,c,l,u;if(!r||r===this){if(i=e.yo-t.yo,a=e.yo-n.yo,c=t.y-t.yo,l=n.y-n.yo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.y=e.yo+(c+l)/2;return}e.y=e.yo+(c*s+l*o)/u;return}if(i=r.distance(e,t,!0,!0),a=r.distance(e,n,!0,!0),c=r.distance(t,t,!1,!0),l=r.distance(n,n,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){da.setRelative(e,e,(c+l)/2,r,!0);return}da.setRelative(e,e,(c*s+l*o)/u,r,!0)},normalSlope:0,setRelative:function(e,t,n,r,i){if(!r||r===this){e.y=(i?t.yo:t.y)+n;return}let a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x;e.y=o+n*r.y+r.normalSlope*(e.x-s)},slope:1/0,touch:function(e){e.yTouched=!0},touched:function(e){return e.yTouched},untouch:function(e){e.yTouched=!1}};Object.freeze(ua),Object.freeze(da);function fa(e,t){this.x=e,this.y=t,this.axis=void 0,this.slope=t/e,this.normalSlope=-e/t,Object.freeze(this)}fa.prototype.distance=function(e,t,n,r){return this.x*ua.distance(e,t,n,r)+this.y*da.distance(e,t,n,r)},fa.prototype.interpolate=function(e,t,n,r){let i,a,o,s,c,l,u;if(o=r.distance(e,t,!0,!0),s=r.distance(e,n,!0,!0),i=r.distance(t,t,!1,!0),a=r.distance(n,n,!1,!0),c=Math.abs(o),l=Math.abs(s),u=c+l,u===0){this.setRelative(e,e,(i+a)/2,r,!0);return}this.setRelative(e,e,(i*l+a*c)/u,r,!0)},fa.prototype.setRelative=function(e,t,n,r,i){r||=this;let a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x,c=o+n*r.y,l=r.normalSlope,u=this.slope,d=e.x,f=e.y;e.x=(u*d-l*s+c-f)/(u-l),e.y=u*(e.x-d)+f},fa.prototype.touch=function(e){e.xTouched=!0,e.yTouched=!0};function pa(e,t){let n=Math.sqrt(e*e+t*t);return e/=n,t/=n,e===1&&t===0?ua:e===0&&t===1?da:new fa(e,t)}function ma(e,t,n,r){this.x=this.xo=Math.round(e*64)/64,this.y=this.yo=Math.round(t*64)/64,this.lastPointOfContour=n,this.onCurve=r,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}ma.prototype.nextTouched=function(e){let t=this.nextPointOnContour;for(;!e.touched(t)&&t!==this;)t=t.nextPointOnContour;return t},ma.prototype.prevTouched=function(e){let t=this.prevPointOnContour;for(;!e.touched(t)&&t!==this;)t=t.prevPointOnContour;return t};var ha=Object.freeze(new ma(0,0)),ga={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function _a(e,t){switch(this.env=e,this.stack=[],this.prog=t,e){case`glyf`:this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case`prep`:this.fv=this.pv=this.dpv=ua,this.round=ia}}na.prototype.exec=function(e,t){if(typeof t!=`number`)throw Error(`Point size is not a number!`);if(this._errorState>2)return;let n=this.font,r=this._prepState;if(!r||r.ppem!==t){let e=this._fpgmState;if(!e){_a.prototype=ga,e=this._fpgmState=new _a(`fpgm`,n.tables.fpgm),e.funcs=[],e.font=n,e.instructionCount=0,e.callDepth=0;try{Z(e)}catch(e){console.log(`Hinting error in FPGM:`+e),this._errorState=3;return}}_a.prototype=e,r=this._prepState=new _a(`prep`,n.tables.prep),r.ppem=t,r.instructionCount=0,r.callDepth=0;let i=n.variation&&n.variation.process.getCvarTransform()||n.tables.cvt;if(i){let e=r.cvt=Array(i.length),a=t/n.unitsPerEm;for(let t=0;t<i.length;t++)e[t]=i[t]*a}else r.cvt=[];try{Z(r)}catch(e){this._errorState<2&&console.log(`Hinting error in PREP:`+e),this._errorState=2}}if(!(this._errorState>1))try{return ea(e,r)}catch(e){this._errorState<1&&(console.log(`Hinting error:`+e),console.log(`Note: further hinting errors are silenced`)),this._errorState=1;return}},ea=function(e,t){let n=t.ppem/t.font.unitsPerEm,r=n,i=e.components,a,o,s;if(_a.prototype=t,!i)s=new _a(`glyf`,e.instructions),s.instructionCount=0,s.callDepth=0,ta(e,s,n,r),o=s.gZone;else{let c=t.font;o=[],a=[];for(let e=0;e<i.length;e++){let t=i[e],l=c.glyphs.get(t.glyphIndex);s=new _a(`glyf`,l.instructions),s.instructionCount=0,s.callDepth=0,ta(l,s,n,r);let u=Math.round(t.dx*n),d=Math.round(t.dy*r),f=s.gZone,p=s.contours;for(let e=0;e<f.length;e++){let t=f[e];t.xTouched=t.yTouched=!1,t.xo=t.x+=u,t.yo=t.y+=d}let m=o.length;o.push.apply(o,f);for(let e=0;e<p.length;e++)a.push(p[e]+m)}e.instructions&&!s.inhibitGridFit&&(s=new _a(`glyf`,e.instructions),s.gZone=s.z0=s.z1=s.z2=o,s.contours=a,o.push(new ma(0,0),new ma(Math.round(e.advanceWidth*n),0)),Z(s),o.length-=2)}return o},ta=function(e,t,n,r){let i=e.points||[],a=i.length,o=t.gZone=t.z0=t.z1=t.z2=[],s=t.contours=[],c;for(let e=0;e<a;e++)c=i[e],o[e]=new ma(c.x*n,c.y*r,c.lastPointOfContour,c.onCurve);let l,u;for(let e=0;e<a;e++)c=o[e],l||(l=c,s.push(e)),c.lastPointOfContour?(c.nextPointOnContour=l,l.prevPointOnContour=c,l=void 0):(u=o[e+1],c.nextPointOnContour=u,u.prevPointOnContour=c);t.inhibitGridFit||(o.push(new ma(0,0),new ma(Math.round(e.advanceWidth*n),0)),Z(t),o.length-=2)},Z=function(e){let t=e.prog;if(!t)return;let n=t.length,r;for(e.ip=0;e.ip<n;e.ip++){if(++e.instructionCount>Zi)throw Error(`Hinting instructions exceeded maximum of `+Zi);if(r=X[t[e.ip]],!r)throw Error(`unknown instruction: 0x`+Number(t[e.ip]).toString(16));r(e)}};function va(e){let t=e.tZone=Array(e.gZone.length);for(let e=0;e<t.length;e++)t[e]=new ma(0,0)}function ya(e,t){let n=e.prog,r=e.ip,i=1,a;do if(a=n[++r],a===88)i++;else if(a===89)i--;else if(a===64)r+=n[r+1]+1;else if(a===65)r+=2*n[r+1]+1;else if(a>=176&&a<=183)r+=a-176+1;else if(a>=184&&a<=191)r+=(a-184+1)*2;else if(t&&i===1&&a===27)break;while(i>0);e.ip=r}function ba(e,t){t.fv=t.pv=t.dpv=e}function xa(e,t){t.pv=t.dpv=e}function Sa(e,t){t.fv=e}function Ca(e,t){let n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i],s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.pv=t.dpv=pa(s,c)}function wa(e,t){let n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i],s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.fv=pa(s,c)}function Ta(e){let t=e.stack,n=t.pop();e.pv=e.dpv=pa(t.pop(),n)}function Ea(e){let t=e.stack,n=t.pop();e.fv=pa(t.pop(),n)}function Da(e){let t=e.stack,n=e.pv;t.push(n.x*16384),t.push(n.y*16384)}function Oa(e){let t=e.stack,n=e.fv;t.push(n.x*16384),t.push(n.y*16384)}function ka(e){e.fv=e.pv}function Aa(e){let t=e.stack,n=t.pop(),r=t.pop(),i=t.pop(),a=t.pop(),o=t.pop(),s=e.z0,c=e.z1,l=s[n],u=s[r],d=c[i],f=c[a],p=e.z2[o],m=l.x,h=l.y,g=u.x,_=u.y,v=d.x,y=d.y,b=f.x,x=f.y,S=(m-g)*(y-x)-(h-_)*(v-b),C=m*_-h*g,w=v*x-y*b;p.x=(C*(v-b)-w*(m-g))/S,p.y=(C*(y-x)-w*(h-_))/S}function ja(e){e.rp0=e.stack.pop()}function Ma(e){e.rp1=e.stack.pop()}function Na(e){e.rp2=e.stack.pop()}function Pa(e){let t=e.stack.pop();switch(e.zp0=t,t){case 0:e.tZone||va(e),e.z0=e.tZone;break;case 1:e.z0=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Fa(e){let t=e.stack.pop();switch(e.zp1=t,t){case 0:e.tZone||va(e),e.z1=e.tZone;break;case 1:e.z1=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Ia(e){let t=e.stack.pop();switch(e.zp2=t,t){case 0:e.tZone||va(e),e.z2=e.tZone;break;case 1:e.z2=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function La(e){let t=e.stack.pop();switch(e.zp0=e.zp1=e.zp2=t,t){case 0:e.tZone||va(e),e.z0=e.z1=e.z2=e.tZone;break;case 1:e.z0=e.z1=e.z2=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Ra(e){e.loop=e.stack.pop(),e.loop>$i&&(e.loop=$i)}function za(e){e.round=ia}function Ba(e){e.round=oa}function Va(e){e.minDis=e.stack.pop()/64}function Ha(e){ya(e,!1)}function Ua(e){let t=e.stack.pop();e.ip+=t-1}function Wa(e){e.cvCutIn=e.stack.pop()/64}function Ga(e){let t=e.stack;t.push(t[t.length-1])}function Ka(e){e.stack.pop()}function qa(e){e.stack.length=0}function Ja(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(n),t.push(r)}function Ya(e){let t=e.stack;t.push(t.length)}function Xa(e){let t=e.stack,n=t.pop(),r=t.pop();if(r>$i&&(r=$i),++e.callDepth>Qi)throw Error(`Hinting call depth exceeded maximum of `+Qi);let i=e.ip,a=e.prog;e.prog=e.funcs[n];for(let t=0;t<r;t++)Z(e);e.ip=i,e.prog=a,e.callDepth--}function Za(e){let t=e.stack.pop();if(++e.callDepth>Qi)throw Error(`Hinting call depth exceeded maximum of `+Qi);let n=e.ip,r=e.prog;e.prog=e.funcs[t],Z(e),e.ip=n,e.prog=r,e.callDepth--}function Qa(e){let t=e.stack,n=t.pop();t.push(t[t.length-n])}function $a(e){let t=e.stack,n=t.pop();t.push(t.splice(t.length-n,1)[0])}function eo(e){if(e.env!==`fpgm`)throw Error(`FDEF not allowed here`);let t=e.stack,n=e.prog,r=e.ip,i=t.pop(),a=r;for(;n[++r]!==45;);e.ip=r,e.funcs[i]=n.slice(a+1,r)}function to(e,t){let n=t.stack.pop(),r=t.z0[n],i=t.fv,a=t.pv,o=a.distance(r,ha);e&&(o=t.round(o)),i.setRelative(r,ha,o,a),i.touch(r),t.rp0=t.rp1=n}function no(e,t){let n=t.z2,r=n.length-2,i,a,o;for(let t=0;t<r;t++)i=n[t],!e.touched(i)&&(a=i.prevTouched(e),a!==i&&(o=i.nextTouched(e),a===o&&e.setRelative(i,i,e.distance(a,a,!1,!0),e,!0),e.interpolate(i,a,o,e)))}function ro(e,t){let n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=t.loop,c=t.z2;for(;s--;){let e=c[n.pop()],t=o.distance(i,i,!1,!0);a.setRelative(e,e,t,o),a.touch(e)}t.loop=1}function io(e,t){let n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=n.pop(),c=t.z2[t.contours[s]],l=c,u=o.distance(i,i,!1,!0);do l!==i&&a.setRelative(l,l,u,o),l=l.nextPointOnContour;while(l!==c)}function ao(e,t){let n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=n.pop(),c;switch(s){case 0:c=t.tZone;break;case 1:c=t.gZone;break;default:throw Error(`Invalid zone`)}let l,u=o.distance(i,i,!1,!0),d=c.length-2;for(let e=0;e<d;e++)l=c[e],a.setRelative(l,l,u,o)}function oo(e){let t=e.stack,n=e.loop,r=e.fv,i=t.pop()/64,a=e.z2;for(;n--;){let e=a[t.pop()];r.setRelative(e,e,i),r.touch(e)}e.loop=1}function so(e){let t=e.stack,n=e.rp1,r=e.rp2,i=e.loop,a=e.z0[n],o=e.z1[r],s=e.fv,c=e.dpv,l=e.z2;for(;i--;){let e=l[t.pop()];s.interpolate(e,a,o,c),s.touch(e)}e.loop=1}function co(e,t){let n=t.stack,r=n.pop()/64,i=n.pop(),a=t.z1[i],o=t.z0[t.rp0],s=t.fv,c=t.pv;s.setRelative(a,o,r,c),s.touch(a),t.rp1=t.rp0,t.rp2=i,e&&(t.rp0=i)}function lo(e){let t=e.stack,n=e.rp0,r=e.z0[n],i=e.loop,a=e.fv,o=e.pv,s=e.z1;for(;i--;){let e=s[t.pop()];a.setRelative(e,r,0,o),a.touch(e)}e.loop=1}function uo(e){e.round=aa}function fo(e,t){let n=t.stack,r=n.pop(),i=n.pop(),a=t.z0[i],o=t.fv,s=t.pv,c=t.cvt[r],l=s.distance(a,ha);e&&(Math.abs(l-c)<t.cvCutIn&&(l=c),l=t.round(l)),o.setRelative(a,ha,l,s),t.zp0===0&&(a.xo=a.x,a.yo=a.y),o.touch(a),t.rp0=t.rp1=i}function po(e){let t=e.prog,n=e.ip,r=e.stack,i=t[++n];for(let e=0;e<i;e++)r.push(t[++n]);e.ip=n}function mo(e){let t=e.ip,n=e.prog,r=e.stack,i=n[++t];for(let e=0;e<i;e++){let e=n[++t]<<8|n[++t];e&32768&&(e=-((e^65535)+1)),r.push(e)}e.ip=t}function ho(e){let t=e.stack,n=e.store;n||=e.store=[];let r=t.pop(),i=t.pop();n[i]=r}function go(e){let t=e.stack,n=e.store,r=t.pop(),i=n&&n[r]||0;t.push(i)}function _o(e){let t=e.stack,n=t.pop(),r=t.pop();e.cvt[r]=n/64}function vo(e){let t=e.stack,n=t.pop();t.push(e.cvt[n]*64)}function yo(e,t){let n=t.stack,r=n.pop(),i=t.z2[r];n.push(t.dpv.distance(i,ha,e,!1)*64)}function bo(e,t){let n=t.stack,r=n.pop(),i=n.pop(),a=t.z1[r],o=t.z0[i],s=t.dpv.distance(o,a,e,e);t.stack.push(Math.round(s*64))}function xo(e){e.stack.push(e.ppem)}function So(e){e.autoFlip=!0}function Co(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(+(r<n))}function wo(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(+(r<=n))}function To(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(+(r>n))}function Eo(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(+(r>=n))}function Do(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(+(n===r))}function Oo(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(n===r?0:1)}function ko(e){let t=e.stack,n=t.pop();t.push(Math.trunc(n)&1?1:0)}function Ao(e){let t=e.stack,n=t.pop();t.push(Math.trunc(n)&1?0:1)}function jo(e){e.stack.pop()||ya(e,!0)}function Mo(e){}function No(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(n&&r?1:0)}function Po(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(n||r?1:0)}function Fo(e){let t=e.stack,n=t.pop();t.push(+!n)}function Io(e,t){let n=t.stack,r=n.pop(),i=t.fv,a=t.pv,o=t.ppem,s=t.deltaBase+(e-1)*16,c=t.deltaShift,l=t.z0;for(let e=0;e<r;e++){let e=n.pop(),t=n.pop();if(s+((t&240)>>4)!==o)continue;let r=(t&15)-8;r>=0&&r++;let u=l[e];i.setRelative(u,u,r*c,a)}}function Lo(e){e.deltaBase=e.stack.pop()}function Ro(e){e.deltaShift=.5**e.stack.pop()}function zo(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(r+n)}function Bo(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(r-n)}function Vo(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(r*64/n)}function Ho(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(r*n/64)}function Uo(e){let t=e.stack,n=t.pop();t.push(Math.abs(n))}function Wo(e){let t=e.stack,n=t.pop();t.push(-n)}function Go(e){let t=e.stack,n=t.pop();t.push(Math.floor(n/64)*64)}function Ko(e){let t=e.stack,n=t.pop();t.push(Math.ceil(n/64)*64)}function qo(e,t){let n=t.stack,r=n.pop();n.push(t.round(r/64)*64)}function Jo(e){let t=e.stack,n=t.pop(),r=t.pop();e.cvt[r]=n*e.ppem/e.font.unitsPerEm}function Yo(e,t){let n=t.stack,r=n.pop(),i=t.ppem,a=t.deltaBase+(e-1)*16,o=t.deltaShift;for(let e=0;e<r;e++){let e=n.pop(),r=n.pop();if(a+((r&240)>>4)!==i)continue;let s=(r&15)-8;s>=0&&s++;let c=s*o;t.cvt[e]+=c}}function Xo(e){let t=e.stack.pop();e.round=la;let n;switch(t&192){case 0:n=.5;break;case 64:n=1;break;case 128:n=2;break;default:throw Error(`invalid SROUND value`)}switch(e.srPeriod=n,t&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*n;break;case 32:e.srPhase=.5*n;break;case 48:e.srPhase=.75*n;break;default:throw Error(`invalid SROUND value`)}t&=15,e.srThreshold=t===0?0:(t/8-.5)*n}function Zo(e){let t=e.stack.pop();e.round=la;let n;switch(t&192){case 0:n=Math.sqrt(2)/2;break;case 64:n=Math.sqrt(2);break;case 128:n=2*Math.sqrt(2);break;default:throw Error(`invalid S45ROUND value`)}switch(e.srPeriod=n,t&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*n;break;case 32:e.srPhase=.5*n;break;case 48:e.srPhase=.75*n;break;default:throw Error(`invalid S45ROUND value`)}t&=15,e.srThreshold=t===0?0:(t/8-.5)*n}function Qo(e){e.round=ra}function $o(e){e.round=sa}function es(e){e.round=ca}function ts(e){e.stack.pop()}function ns(e,t){let n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i],s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.dpv=pa(s,c)}function rs(e){let t=e.stack,n=t.pop(),r=0;n&1&&(r=35),n&32&&(r|=4096),t.push(r)}function is(e){let t=e.stack,n=t.pop(),r=t.pop(),i=t.pop();t.push(r),t.push(n),t.push(i)}function as(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(Math.max(r,n))}function os(e){let t=e.stack,n=t.pop(),r=t.pop();t.push(Math.min(r,n))}function ss(e){e.stack.pop()}function cs(e){let t=e.stack.pop(),n=e.stack.pop();switch(t){case 1:e.inhibitGridFit=!!n;return;case 2:e.ignoreCvt=!!n;return;default:throw Error(`invalid INSTCTRL[] selector`)}}function ls(e,t){let n=t.stack,r=t.prog,i=t.ip;for(let t=0;t<e;t++)n.push(r[++i]);t.ip=i}function us(e,t){let n=t.ip,r=t.prog,i=t.stack;for(let t=0;t<e;t++){let e=r[++n]<<8|r[++n];e&32768&&(e=-((e^65535)+1)),i.push(e)}t.ip=n}function Q(e,t,n,r,i,a){let o=a.stack,s=e&&o.pop(),c=o.pop(),l=a.rp0,u=a.z0[l],d=a.z1[c],f=a.minDis,p=a.fv,m=a.dpv,h,g,_;h=m.distance(d,u,!0,!0),g=h>=0?1:-1,h=Math.abs(h),e&&(_=a.cvt[s],r&&Math.abs(h-_)<a.cvCutIn&&(h=_)),n&&h<f&&(h=f),r&&(h=a.round(h)),p.setRelative(d,u,g*h,m),p.touch(d),a.rp1=a.rp0,a.rp2=c,t&&(a.rp0=c)}X=[ba.bind(void 0,da),ba.bind(void 0,ua),xa.bind(void 0,da),xa.bind(void 0,ua),Sa.bind(void 0,da),Sa.bind(void 0,ua),Ca.bind(void 0,0),Ca.bind(void 0,1),wa.bind(void 0,0),wa.bind(void 0,1),Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,void 0,void 0,Ga,Ka,qa,Ja,Ya,Qa,$a,void 0,void 0,void 0,Xa,Za,eo,void 0,to.bind(void 0,0),to.bind(void 0,1),no.bind(void 0,da),no.bind(void 0,ua),ro.bind(void 0,0),ro.bind(void 0,1),io.bind(void 0,0),io.bind(void 0,1),ao.bind(void 0,0),ao.bind(void 0,1),oo,so,co.bind(void 0,0),co.bind(void 0,1),lo,uo,fo.bind(void 0,0),fo.bind(void 0,1),po,mo,ho,go,_o,vo,yo.bind(void 0,0),yo.bind(void 0,1),void 0,bo.bind(void 0,0),bo.bind(void 0,1),xo,void 0,So,void 0,void 0,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io.bind(void 0,1),Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo.bind(void 0,0),qo.bind(void 0,1),qo.bind(void 0,2),qo.bind(void 0,3),void 0,void 0,void 0,void 0,Jo,Io.bind(void 0,2),Io.bind(void 0,3),Yo.bind(void 0,1),Yo.bind(void 0,2),Yo.bind(void 0,3),Xo,Zo,void 0,void 0,Qo,void 0,$o,es,Ka,Ka,void 0,void 0,void 0,void 0,void 0,ts,ns.bind(void 0,0),ns.bind(void 0,1),rs,void 0,is,as,os,ss,cs,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,ls.bind(void 0,1),ls.bind(void 0,2),ls.bind(void 0,3),ls.bind(void 0,4),ls.bind(void 0,5),ls.bind(void 0,6),ls.bind(void 0,7),ls.bind(void 0,8),us.bind(void 0,1),us.bind(void 0,2),us.bind(void 0,3),us.bind(void 0,4),us.bind(void 0,5),us.bind(void 0,6),us.bind(void 0,7),us.bind(void 0,8),Q.bind(void 0,0,0,0,0,0),Q.bind(void 0,0,0,0,0,1),Q.bind(void 0,0,0,0,0,2),Q.bind(void 0,0,0,0,0,3),Q.bind(void 0,0,0,0,1,0),Q.bind(void 0,0,0,0,1,1),Q.bind(void 0,0,0,0,1,2),Q.bind(void 0,0,0,0,1,3),Q.bind(void 0,0,0,1,0,0),Q.bind(void 0,0,0,1,0,1),Q.bind(void 0,0,0,1,0,2),Q.bind(void 0,0,0,1,0,3),Q.bind(void 0,0,0,1,1,0),Q.bind(void 0,0,0,1,1,1),Q.bind(void 0,0,0,1,1,2),Q.bind(void 0,0,0,1,1,3),Q.bind(void 0,0,1,0,0,0),Q.bind(void 0,0,1,0,0,1),Q.bind(void 0,0,1,0,0,2),Q.bind(void 0,0,1,0,0,3),Q.bind(void 0,0,1,0,1,0),Q.bind(void 0,0,1,0,1,1),Q.bind(void 0,0,1,0,1,2),Q.bind(void 0,0,1,0,1,3),Q.bind(void 0,0,1,1,0,0),Q.bind(void 0,0,1,1,0,1),Q.bind(void 0,0,1,1,0,2),Q.bind(void 0,0,1,1,0,3),Q.bind(void 0,0,1,1,1,0),Q.bind(void 0,0,1,1,1,1),Q.bind(void 0,0,1,1,1,2),Q.bind(void 0,0,1,1,1,3),Q.bind(void 0,1,0,0,0,0),Q.bind(void 0,1,0,0,0,1),Q.bind(void 0,1,0,0,0,2),Q.bind(void 0,1,0,0,0,3),Q.bind(void 0,1,0,0,1,0),Q.bind(void 0,1,0,0,1,1),Q.bind(void 0,1,0,0,1,2),Q.bind(void 0,1,0,0,1,3),Q.bind(void 0,1,0,1,0,0),Q.bind(void 0,1,0,1,0,1),Q.bind(void 0,1,0,1,0,2),Q.bind(void 0,1,0,1,0,3),Q.bind(void 0,1,0,1,1,0),Q.bind(void 0,1,0,1,1,1),Q.bind(void 0,1,0,1,1,2),Q.bind(void 0,1,0,1,1,3),Q.bind(void 0,1,1,0,0,0),Q.bind(void 0,1,1,0,0,1),Q.bind(void 0,1,1,0,0,2),Q.bind(void 0,1,1,0,0,3),Q.bind(void 0,1,1,0,1,0),Q.bind(void 0,1,1,0,1,1),Q.bind(void 0,1,1,0,1,2),Q.bind(void 0,1,1,0,1,3),Q.bind(void 0,1,1,1,0,0),Q.bind(void 0,1,1,1,0,1),Q.bind(void 0,1,1,1,0,2),Q.bind(void 0,1,1,1,0,3),Q.bind(void 0,1,1,1,1,0),Q.bind(void 0,1,1,1,1,1),Q.bind(void 0,1,1,1,1,2),Q.bind(void 0,1,1,1,1,3)];var ds=na;function fs(e){this.char=e,this.state={},this.activeState=null}function ps(e,t,n){this.contextName=n,this.startIndex=e,this.endOffset=t}function ms(e,t,n){this.contextName=e,this.openRange=null,this.ranges=[],this.checkStart=t,this.checkEnd=n}function hs(e,t){this.context=e,this.index=t,this.length=e.length,this.current=e[t],this.backtrack=e.slice(0,t),this.lookahead=e.slice(t+1)}function gs(e){this.eventId=e,this.subscribers=[]}function _s(e){let t=[`start`,`end`,`next`,`newToken`,`contextStart`,`contextEnd`,`insertToken`,`removeToken`,`removeRange`,`replaceToken`,`replaceRange`,`composeRUD`,`updateContextsRanges`];for(let e=0;e<t.length;e++){let n=t[e];Object.defineProperty(this.events,n,{value:new gs(n)})}if(e)for(let n=0;n<t.length;n++){let r=t[n],i=e[r];typeof i==`function`&&this.events[r].subscribe(i)}let n=[`insertToken`,`removeToken`,`removeRange`,`replaceToken`,`replaceRange`,`composeRUD`];for(let e=0;e<n.length;e++){let t=n[e];this.events[t].subscribe(this.updateContextsRanges)}}function vs(e){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],_s.call(this,e)}fs.prototype.setState=function(e,t){return this.state[e]=t,this.activeState={key:e,value:this.state[e]},this.activeState},fs.prototype.getState=function(e){return this.state[e]||null},vs.prototype.inboundIndex=function(e){return e>=0&&e<this.tokens.length},vs.prototype.composeRUD=function(e){let t=e.map(e=>this[e[0]].apply(this,e.slice(1).concat(!0))),n=e=>typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`FAIL`);if(t.every(n))return{FAIL:`composeRUD: one or more operations hasn't completed successfully`,report:t.filter(n)};this.dispatch(`composeRUD`,[t.filter(e=>!n(e))])},vs.prototype.replaceRange=function(e,t,n,r){t=t===null?this.tokens.length:t;let i=n.every(e=>e instanceof fs);if(!isNaN(e)&&this.inboundIndex(e)&&i){let i=this.tokens.splice.apply(this.tokens,[e,t].concat(n));return r||this.dispatch(`replaceToken`,[e,t,n]),[i,n]}return{FAIL:`replaceRange: invalid tokens or startIndex.`}},vs.prototype.replaceToken=function(e,t,n){if(!isNaN(e)&&this.inboundIndex(e)&&t instanceof fs){let r=this.tokens.splice(e,1,t);return n||this.dispatch(`replaceToken`,[e,t]),[r[0],t]}return{FAIL:`replaceToken: invalid token or index.`}},vs.prototype.removeRange=function(e,t,n){t=isNaN(t)?this.tokens.length:t;let r=this.tokens.splice(e,t);return n||this.dispatch(`removeRange`,[r,e,t]),r},vs.prototype.removeToken=function(e,t){if(!isNaN(e)&&this.inboundIndex(e)){let n=this.tokens.splice(e,1);return t||this.dispatch(`removeToken`,[n,e]),n}return{FAIL:`removeToken: invalid token index.`}},vs.prototype.insertToken=function(e,t,n){return e.every(e=>e instanceof fs)?(this.tokens.splice.apply(this.tokens,[t,0].concat(e)),n||this.dispatch(`insertToken`,[e,t]),e):{FAIL:`insertToken: invalid token(s).`}},vs.prototype.registerModifier=function(e,t,n){this.events.newToken.subscribe(function(r,i){let a=[r,i],o=t===null||t.apply(this,a)===!0,s=[r,i];if(o){let t=n.apply(this,s);r.setState(e,t)}}),this.registeredModifiers.push(e)},gs.prototype.subscribe=function(e){return typeof e==`function`?this.subscribers.push(e)-1:{FAIL:`invalid '${this.eventId}' event handler`}},gs.prototype.unsubscribe=function(e){this.subscribers.splice(e,1)},hs.prototype.setCurrentIndex=function(e){this.index=e,this.current=this.context[e],this.backtrack=this.context.slice(0,e),this.lookahead=this.context.slice(e+1)},hs.prototype.get=function(e){switch(!0){case e===0:return this.current;case e<0&&Math.abs(e)<=this.backtrack.length:return this.backtrack.slice(e)[0];case e>0&&e<=this.lookahead.length:return this.lookahead[e-1];default:return null}},vs.prototype.rangeToText=function(e){if(e instanceof ps)return this.getRangeTokens(e).map(e=>e.char).join(``)},vs.prototype.getText=function(){return this.tokens.map(e=>e.char).join(``)},vs.prototype.getContext=function(e){return this.registeredContexts[e]||null},vs.prototype.on=function(e,t){let n=this.events[e];return n?n.subscribe(t):null},vs.prototype.dispatch=function(e,t){let n=this.events[e];if(n instanceof gs)for(let e=0;e<n.subscribers.length;e++)n.subscribers[e].apply(this,t||[])},vs.prototype.registerContextChecker=function(e,t,n){if(this.getContext(e))return{FAIL:`context name '${e}' is already registered.`};if(typeof t!=`function`)return{FAIL:`missing context start check.`};if(typeof n!=`function`)return{FAIL:`missing context end check.`};let r=new ms(e,t,n);return this.registeredContexts[e]=r,this.contextCheckers.push(r),r},vs.prototype.getRangeTokens=function(e){let t=e.startIndex+e.endOffset;return[].concat(this.tokens.slice(e.startIndex,t))},vs.prototype.getContextRanges=function(e){let t=this.getContext(e);return t?t.ranges:{FAIL:`context checker '${e}' is not registered.`}},vs.prototype.resetContextsRanges=function(){let e=this.registeredContexts;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let n=e[t];n.ranges=[]}},vs.prototype.updateContextsRanges=function(){this.resetContextsRanges();let e=this.tokens.map(e=>e.char);for(let t=0;t<e.length;t++){let n=new hs(e,t);this.runContextCheck(n)}this.dispatch(`updateContextsRanges`,[this.registeredContexts])},vs.prototype.setEndOffset=function(e,t){let n=this.getContext(t).openRange.startIndex,r=new ps(n,e,t),i=this.getContext(t).ranges;return r.rangeId=`${t}.${i.length}`,i.push(r),this.getContext(t).openRange=null,r},vs.prototype.runContextCheck=function(e){let t=e.index;for(let n=0;n<this.contextCheckers.length;n++){let r=this.contextCheckers[n],i=r.contextName,a=this.getContext(i).openRange;if(!a&&r.checkStart(e)&&(a=new ps(t,null,i),this.getContext(i).openRange=a,this.dispatch(`contextStart`,[i,t])),a&&r.checkEnd(e)){let e=t-a.startIndex+1,n=this.setEndOffset(e,i);this.dispatch(`contextEnd`,[i,n])}}},vs.prototype.tokenize=function(e){this.tokens=[],this.resetContextsRanges();let t=Array.from(e);this.dispatch(`start`);for(let e=0;e<t.length;e++){let n=t[e],r=new hs(t,e);this.dispatch(`next`,[r]),this.runContextCheck(r);let i=new fs(n);this.tokens.push(i),this.dispatch(`newToken`,[i,r])}return this.dispatch(`end`,[this.tokens]),this.tokens};var ys=vs;function bs(e){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e)}function xs(e){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e)}function Ss(e){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e)}function Cs(e){return/[\u0E00-\u0E7F]/.test(e)}function ws(e){return/[A-z]/.test(e)}function Ts(e){return/\s/.test(e)}function Es(e){this.font=e,this.features={}}function Ds(e){this.id=e.id,this.tag=e.tag,this.substitution=e.substitution}function Os(e,t){if(!e)return-1;switch(t.format){case 1:return t.glyphs.indexOf(e);case 2:{let n=t.ranges;for(let t=0;t<n.length;t++){let r=n[t];if(e>=r.start&&e<=r.end){let t=e-r.start;return r.index+t}}break}default:return-1}return-1}function ks(e,t){return Os(e,t.coverage)===-1?null:e+t.deltaGlyphId}function As(e,t){let n=Os(e,t.coverage);return n===-1?null:t.substitute[n]}function js(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t.current;a=Array.isArray(a)?a[0]:a;let o=Os(a,i);o!==-1&&n.push(o)}return n.length===e.length?n:-1}function Ms(e,t){let n=t.inputCoverage.length+t.lookaheadCoverage.length+t.backtrackCoverage.length;if(e.context.length<n)return[];let r=js(t.inputCoverage,e);if(r===-1)return[];let i=t.inputCoverage.length-1;if(e.lookahead.length<t.lookaheadCoverage.length)return[];let a=e.lookahead.slice(i);for(;a.length&&Ss(a[0].char);)a.shift();let o=new hs(a,0),s=js(t.lookaheadCoverage,o),c=[].concat(e.backtrack);for(c.reverse();c.length&&Ss(c[0].char);)c.shift();if(c.length<t.backtrackCoverage.length)return[];let l=new hs(c,0),u=js(t.backtrackCoverage,l),d=r.length===t.inputCoverage.length&&s.length===t.lookaheadCoverage.length&&u.length===t.backtrackCoverage.length,f=[];if(d)for(let n=0;n<t.lookupRecords.length;n++){let r=t.lookupRecords[n],i=r.lookupListIndex,a=this.getLookupByIndex(i);for(let t=0;t<a.subtables.length;t++){let n=a.subtables[t],i,o=this.getSubstitutionType(a,n);if(o===`71`?(o=this.getSubstitutionType(n,n.extension),i=this.getLookupMethod(n,n.extension),n=n.extension):i=this.getLookupMethod(a,n),o===`12`){let t=e.get(r.sequenceIndex),n=i(t);n&&f.push(n)}else if(o===`21`){let t=e.get(r.sequenceIndex),n=i(t);n&&f.push(n)}else throw Error(`Substitution type ${o} is not supported in chaining substitution`)}}return f}function Ns(e,t){let n=e.current,r=Os(n,t.coverage);if(r===-1)return null;let i,a=t.ligatureSets[r];for(let t=0;t<a.length;t++){i=a[t];for(let t=0;t<i.components.length&&e.lookahead[t]===i.components[t];t++)if(t===i.components.length-1)return i}return null}function Ps(e,t){let n=e.current;if(Os(n,t.coverage)===-1)return null;for(let r of t.ruleSets)for(let t of r){let r=!0;for(let n=0;n<t.input.length;n++)if(e.lookahead[n]!==t.input[n]){r=!1;break}if(r){let e=[];e.push(n);for(let n=0;n<t.input.length;n++)e.push(t.input[n]);let r=(e,t)=>{let{lookupListIndex:n,sequenceIndex:r}=t,{subtables:i}=this.getLookupByIndex(n);for(let t of i)Os(e[r],t.coverage)!==-1&&(e[r]=t.deltaGlyphId)};for(let n=0;n<t.lookupRecords.length;n++){let i=t.lookupRecords[n];r(e,i)}return e}}return null}function Fs(e,t){if(e.context.length<t.coverages.length)return[];for(let n=0;n<t.coverages.length;n++){let r=e.get(n);if(r=Array.isArray(r)?r[0]:r,Os(r,t.coverages[n])===-1)return[]}let n=[];for(let r=0;r<t.lookupRecords.length;r++){let i=t.lookupRecords[r],a=i.lookupListIndex,o=this.getLookupByIndex(a);for(let t=0;t<o.subtables.length;t++){let r=o.subtables[t],a,s=this.getSubstitutionType(o,r);if(s===`71`?(s=this.getSubstitutionType(r,r.extension),a=this.getLookupMethod(r,r.extension),r=r.extension):a=this.getLookupMethod(o,r),s===`12`){let t=e.get(i.sequenceIndex),r=a(t);r&&n.push(r)}else if(s===`21`){let t=e.get(i.sequenceIndex),r=a(t);r&&n.push(r)}}}return n}function Is(e,t){let n=Os(e,t.coverage);return n===-1?null:t.sequences[n]}Es.prototype.getDefaultScriptFeaturesIndexes=function(){let e=this.font.tables.gsub.scripts;for(let t=0;t<e.length;t++){let n=e[t];if(n.tag===`DFLT`)return n.script.defaultLangSys.featureIndexes}return[]},Es.prototype.getScriptFeaturesIndexes=function(e){if(!this.font.tables.gsub)return[];if(!e)return this.getDefaultScriptFeaturesIndexes();let t=this.font.tables.gsub.scripts;for(let n=0;n<t.length;n++){let r=t[n];if(r.tag===e&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;{let t=r.langSysRecords;if(t)for(let n=0;n<t.length;n++){let r=t[n];if(r.tag===e)return r.langSys.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()},Es.prototype.mapTagsToFeatures=function(e,t){let n={};for(let t=0;t<e.length;t++){let r=e[t].tag;n[r]=e[t].feature}this.features[t].tags=n},Es.prototype.getScriptFeatures=function(e){let t=this.features[e];if(Object.prototype.hasOwnProperty.call(this.features,e))return t;let n=this.getScriptFeaturesIndexes(e);if(!n)return null;let r=this.font.tables.gsub;return t=n.map(e=>r.features[e]),this.features[e]=t,this.mapTagsToFeatures(t,e),t},Es.prototype.getSubstitutionType=function(e,t){return e.lookupType.toString()+t.substFormat.toString()},Es.prototype.getLookupMethod=function(e,t){let n=this.getSubstitutionType(e,t);switch(n){case`11`:return e=>ks.apply(this,[e,t]);case`12`:return e=>As.apply(this,[e,t]);case`63`:return e=>Ms.apply(this,[e,t]);case`41`:return e=>Ns.apply(this,[e,t]);case`21`:return e=>Is.apply(this,[e,t]);case`51`:return e=>Ps.apply(this,[e,t]);case`53`:return e=>Fs.apply(this,[e,t]);default:throw Error(`substitutionType : ${n} lookupType: ${e.lookupType} - substFormat: ${t.substFormat} is not yet supported`)}},Es.prototype.lookupFeature=function(e){let t=e.contextParams,n=t.index,r=this.getFeature({tag:e.tag,script:e.script});if(!r)return Error(`font '${(this.font.names.unicode||this.font.names.windows||this.font.names.macintosh).fullName.en}' doesn't support feature '${e.tag}' for script '${e.script}'.`);let i=this.getFeatureLookups(r),a=[].concat(t.context);for(let r=0;r<i.length;r++){let o=i[r],s=this.getLookupSubtables(o);for(let r=0;r<s.length;r++){let i=s[r],c=this.getSubstitutionType(o,i),l;c===`71`?(c=this.getSubstitutionType(i,i.extension),l=this.getLookupMethod(i,i.extension),i=i.extension):l=this.getLookupMethod(o,i);let u;switch(c){case`11`:u=l(t.current),u&&a.splice(n,1,new Ds({id:11,tag:e.tag,substitution:u}));break;case`12`:u=l(t.current),u&&a.splice(n,1,new Ds({id:12,tag:e.tag,substitution:u}));break;case`63`:u=l(t),Array.isArray(u)&&u.length&&a.splice(n,1,new Ds({id:63,tag:e.tag,substitution:u}));break;case`41`:u=l(t),u&&a.splice(n,1,new Ds({id:41,tag:e.tag,substitution:u}));break;case`21`:u=l(t.current),u&&a.splice(n,1,new Ds({id:21,tag:e.tag,substitution:u}));break;case`51`:case`53`:u=l(t),Array.isArray(u)&&u.length&&a.splice(n,1,new Ds({id:parseInt(c),tag:e.tag,substitution:u}))}t=new hs(a,n),!(Array.isArray(u)&&!u.length)&&(u=null)}}return a.length?a:null},Es.prototype.supports=function(e){if(!e.script)return!1;this.getScriptFeatures(e.script);let t=Object.prototype.hasOwnProperty.call(this.features,e.script);if(!e.tag)return t;let n=this.features[e.script].some(t=>t.tag===e.tag);return t&&n},Es.prototype.getLookupSubtables=function(e){return e.subtables||null},Es.prototype.getLookupByIndex=function(e){return this.font.tables.gsub.lookups[e]||null},Es.prototype.getFeatureLookups=function(e){return e.lookupListIndexes.map(this.getLookupByIndex.bind(this))},Es.prototype.getFeature=function(e){if(!this.font)return{FAIL:`No font was found`};Object.prototype.hasOwnProperty.call(this.features,e.script)||this.getScriptFeatures(e.script);let t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:`No feature for script ${e.script}`}};var Ls=Es;function Rs(e){let t=e.current,n=e.get(-1);return n===null&&bs(t)||!bs(n)&&bs(t)}function zs(e){let t=e.get(1);return t===null||!bs(t)}var Bs={startCheck:Rs,endCheck:zs};function Vs(e){let t=e.current,n=e.get(-1);return(bs(t)||Ss(t))&&!bs(n)}function Hs(e){let t=e.get(1);switch(!0){case t===null:return!0;case!bs(t)&&!Ss(t):{let n=Ts(t);if(!n)return!0;if(n){let t=!1;if(t=e.lookahead.some(e=>bs(e)||Ss(e)),!t)return!0}break}default:return!1}}var Us={startCheck:Vs,endCheck:Hs};function Ws(e,t,n){t[n].setState(e.tag,e.substitution)}function Gs(e,t,n){t[n].setState(e.tag,e.substitution)}function Ks(e,t,n){for(let r=0;r<e.substitution.length;r++){let i=e.substitution[r],a=t[n+r];if(Array.isArray(i)){i.length?a.setState(e.tag,i[0]):a.setState(`deleted`,!0);continue}a.setState(e.tag,i)}}function qs(e,t,n){let r=t[n];r.setState(e.tag,e.substitution.ligGlyph);let i=e.substitution.components.length;for(let e=0;e<i;e++)r=t[n+e+1],r.setState(`deleted`,!0)}var Js={11:Ws,12:Gs,63:Ks,41:qs,51:Ks,53:Ks};function Ys(e,t,n){e instanceof Ds&&Js[e.id]&&Js[e.id](e,t,n)}var Xs=Ys;function Zs(e){let t=[].concat(e.backtrack);for(let e=t.length-1;e>=0;e--){let n=t[e],r=xs(n),i=Ss(n);if(!r&&!i)return!0;if(r)return!1}return!1}function Qs(e){if(xs(e.current))return!1;for(let t=0;t<e.lookahead.length;t++){let n=e.lookahead[t];if(!Ss(n))return!0}return!1}function $s(e){let t=`arab`,n=this.featuresTags[t],r=this.tokenizer.getRangeTokens(e);if(r.length===1)return;let i=new hs(r.map(e=>e.getState(`glyphIndex`)),0),a=new hs(r.map(e=>e.char),0);for(let e=0;e<r.length;e++){let o=r[e];if(Ss(o.char))continue;i.setCurrentIndex(e),a.setCurrentIndex(e);let s=0;Zs(a)&&(s|=1),Qs(a)&&(s|=2);let c;switch(s){case 1:c=`fina`;break;case 2:c=`init`;break;case 3:c=`medi`}if(n.indexOf(c)===-1)continue;let l=this.query.lookupFeature({tag:c,script:t,contextParams:i});if(l instanceof Error){console.info(l.message);continue}for(let e=0;e<l.length;e++){let t=l[e];t instanceof Ds&&(Xs(t,r,e),i.context[e]=t.substitution)}}}var $=$s;function ec(e,t){return new hs(e.map(e=>e.activeState.value),t||0)}function tc(e){let t=this.tokenizer.getRangeTokens(e),n=ec(t);for(let e=0;e<n.context.length;e++){n.setCurrentIndex(e);let r=this.query.lookupFeature({tag:`rlig`,script:`arab`,contextParams:n});if(r.length){for(let n=0;n<r.length;n++){let i=r[n];Xs(i,t,e)}n=ec(t)}}}var nc=tc;function rc(e){return e.index===0&&e.context.length>1}function ic(e){return e.index===e.context.length-1}var ac={startCheck:rc,endCheck:ic};function oc(e,t){return new hs(e.map(e=>e.activeState.value),t||0)}function sc(e){let t=`delf`,n=`ccmp`,r=this.tokenizer.getRangeTokens(e),i=oc(r);for(let e=0;e<i.context.length;e++){if(!this.query.getFeature({tag:n,script:t,contextParams:i}))continue;i.setCurrentIndex(e);let a=this.query.lookupFeature({tag:n,script:t,contextParams:i});if(a.length){for(let t=0;t<a.length;t++){let n=a[t];Xs(n,r,e)}i=oc(r)}}}var cc=sc;function lc(e){let t=e.current,n=e.get(-1);return n===null&&ws(t)||!ws(n)&&ws(t)}function uc(e){let t=e.get(1);return t===null||!ws(t)}var dc={startCheck:lc,endCheck:uc};function fc(e,t){return new hs(e.map(e=>e.activeState.value),t||0)}function pc(e){let t=this.tokenizer.getRangeTokens(e),n=fc(t);for(let e=0;e<n.context.length;e++){n.setCurrentIndex(e);let r=this.query.lookupFeature({tag:`liga`,script:`latn`,contextParams:n});if(r.length){for(let n=0;n<r.length;n++){let i=r[n];Xs(i,t,e)}n=fc(t)}}}var mc=pc;function hc(e){let t=e.current,n=e.get(-1);return n===null&&Cs(t)||!Cs(n)&&Cs(t)}function gc(e){let t=e.get(1);return t===null||!Cs(t)}var _c={startCheck:hc,endCheck:gc};function vc(e,t){return new hs(e.map(e=>e.activeState.value),t||0)}function yc(e){let t=this.tokenizer.getRangeTokens(e),n=vc(t,0);for(let e=0;e<n.context.length;e++){n.setCurrentIndex(e);let r=this.query.lookupFeature({tag:`ccmp`,script:`thai`,contextParams:n});if(r.length){for(let n=0;n<r.length;n++){let i=r[n];Xs(i,t,e)}n=vc(t,e)}}}var bc=yc;function xc(e,t){return new hs(e.map(e=>e.activeState.value),t||0)}function Sc(e){let t=this.tokenizer.getRangeTokens(e),n=xc(t,0);for(let e=0;e<n.context.length;e++){n.setCurrentIndex(e);let r=this.query.lookupFeature({tag:`liga`,script:`thai`,contextParams:n});if(r.length){for(let n=0;n<r.length;n++){let i=r[n];Xs(i,t,e)}n=xc(t,e)}}}var Cc=Sc;function wc(e,t){return new hs(e.map(e=>e.activeState.value),t||0)}function Tc(e){let t=this.tokenizer.getRangeTokens(e),n=wc(t,0);for(let e=0;e<n.context.length;e++){n.setCurrentIndex(e);let r=this.query.lookupFeature({tag:`rlig`,script:`thai`,contextParams:n});if(r.length){for(let n=0;n<r.length;n++){let i=r[n];Xs(i,t,e)}n=wc(t,e)}}}var Ec=Tc;function Dc(e){if(e===null)return!1;let t=e.codePointAt(0);return t>=6155&&t<=6157||t>=65024&&t<=65039||t>=917760&&t<=917999}function Oc(e){let t=e.current,n=e.get(1);return n===null&&Dc(t)||Dc(n)}function kc(e){let t=e.get(1);return t===null||!Dc(t)}var Ac={startCheck:Oc,endCheck:kc};function jc(e){let t=this.query.font,n=this.tokenizer.getRangeTokens(e);if(n[1].setState(`deleted`,!0),t.tables.cmap&&t.tables.cmap.varSelectorList){let e=n[0].char.codePointAt(0),r=n[1].char.codePointAt(0),i=t.tables.cmap.varSelectorList[r];if(i!==void 0&&i.nonDefaultUVS){let r=i.nonDefaultUVS.uvsMappings;if(r[e]){let i=r[e].glyphID;t.glyphs.glyphs[i]!==void 0&&n[0].setState(`glyphIndex`,i)}}}}var Mc=jc;function Nc(e){this.baseDir=e||`ltr`,this.tokenizer=new ys,this.featuresTags={}}Nc.prototype.setText=function(e){this.text=e},Nc.prototype.contextChecks={ccmpReplacementCheck:ac,latinWordCheck:dc,arabicWordCheck:Bs,arabicSentenceCheck:Us,thaiWordCheck:_c,unicodeVariationSequenceCheck:Ac};function Pc(e){let t=this.contextChecks[`${e}Check`];return this.tokenizer.registerContextChecker(e,t.startCheck,t.endCheck)}function Fc(){return Pc.call(this,`ccmpReplacement`),Pc.call(this,`latinWord`),Pc.call(this,`arabicWord`),Pc.call(this,`arabicSentence`),Pc.call(this,`thaiWord`),Pc.call(this,`unicodeVariationSequence`),this.tokenizer.tokenize(this.text)}function Ic(){let e=this.tokenizer.getContextRanges(`arabicSentence`);for(let t=0;t<e.length;t++){let n=e[t],r=this.tokenizer.getRangeTokens(n);this.tokenizer.replaceRange(n.startIndex,n.endOffset,r.reverse())}}Nc.prototype.registerFeatures=function(e,t){let n=t.filter(t=>this.query.supports({script:e,tag:t}));Object.prototype.hasOwnProperty.call(this.featuresTags,e)?this.featuresTags[e]=this.featuresTags[e].concat(n):this.featuresTags[e]=n},Nc.prototype.applyFeatures=function(e,t){if(!e)throw Error(`No valid font was provided to apply features`);this.query||=new Ls(e);for(let e=0;e<t.length;e++){let n=t[e];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}},Nc.prototype.registerModifier=function(e,t,n){this.tokenizer.registerModifier(e,t,n)};function Lc(){if(this.tokenizer.registeredModifiers.indexOf(`glyphIndex`)===-1)throw Error(`glyphIndex modifier is required to apply arabic presentation features.`)}function Rc(){if(!Object.prototype.hasOwnProperty.call(this.featuresTags,`arab`))return;Lc.call(this);let e=this.tokenizer.getContextRanges(`arabicWord`);for(let t=0;t<e.length;t++){let n=e[t];$.call(this,n)}}function zc(){Lc.call(this);let e=this.tokenizer.getContextRanges(`ccmpReplacement`);for(let t=0;t<e.length;t++){let n=e[t];cc.call(this,n)}}function Bc(){if(!this.hasFeatureEnabled(`arab`,`rlig`))return;Lc.call(this);let e=this.tokenizer.getContextRanges(`arabicWord`);for(let t=0;t<e.length;t++){let n=e[t];nc.call(this,n)}}function Vc(){if(!this.hasFeatureEnabled(`latn`,`liga`))return;Lc.call(this);let e=this.tokenizer.getContextRanges(`latinWord`);for(let t=0;t<e.length;t++){let n=e[t];mc.call(this,n)}}function Hc(){let e=this.tokenizer.getContextRanges(`unicodeVariationSequence`);for(let t=0;t<e.length;t++){let n=e[t];Mc.call(this,n)}}function Uc(){Lc.call(this);let e=this.tokenizer.getContextRanges(`thaiWord`);for(let t=0;t<e.length;t++){let n=e[t];this.hasFeatureEnabled(`thai`,`liga`)&&Cc.call(this,n),this.hasFeatureEnabled(`thai`,`rlig`)&&Ec.call(this,n),this.hasFeatureEnabled(`thai`,`ccmp`)&&bc.call(this,n)}}Nc.prototype.checkContextReady=function(e){return!!this.tokenizer.getContext(e)},Nc.prototype.applyFeaturesToContexts=function(){this.checkContextReady(`ccmpReplacement`)&&zc.call(this),this.checkContextReady(`arabicWord`)&&(Rc.call(this),Bc.call(this)),this.checkContextReady(`latinWord`)&&Vc.call(this),this.checkContextReady(`arabicSentence`)&&Ic.call(this),this.checkContextReady(`thaiWord`)&&Uc.call(this),this.checkContextReady(`unicodeVariationSequence`)&&Hc.call(this)},Nc.prototype.hasFeatureEnabled=function(e,t){return(this.featuresTags[e]||[]).indexOf(t)!==-1},Nc.prototype.processText=function(e){(!this.text||this.text!==e)&&(this.setText(e),Fc.call(this),this.applyFeaturesToContexts())},Nc.prototype.getBidiText=function(e){return this.processText(e),this.tokenizer.getText()},Nc.prototype.getTextGlyphs=function(e){this.processText(e);let t=[];for(let e=0;e<this.tokenizer.tokens.length;e++){let n=this.tokenizer.tokens[e];if(n.state.deleted)continue;let r=n.activeState.value;t.push(Array.isArray(r)?r[0]:r)}return t};var Wc=Nc;function Gc(e){return{fontFamily:{en:e.familyName||` `},fontSubfamily:{en:e.styleName||` `},fullName:{en:e.fullName||e.familyName+` `+e.styleName},postScriptName:{en:e.postScriptName||(e.familyName+e.styleName).replace(/\s/g,``)},designer:{en:e.designer||` `},designerURL:{en:e.designerURL||` `},manufacturer:{en:e.manufacturer||` `},manufacturerURL:{en:e.manufacturerURL||` `},license:{en:e.license||` `},licenseURL:{en:e.licenseURL||` `},version:{en:e.version||`Version 0.1`},description:{en:e.description||` `},copyright:{en:e.copyright||` `},trademark:{en:e.trademark||` `}}}function Kc(e){if(e||={},e.tables=e.tables||{},!e.empty){if(!e.familyName)throw Error(`When creating a new Font object, familyName is required.`);if(!e.styleName)throw Error(`When creating a new Font object, styleName is required.`);if(!e.unitsPerEm)throw Error(`When creating a new Font object, unitsPerEm is required.`);if(!e.ascender)throw Error(`When creating a new Font object, ascender is required.`);if(e.descender>0)throw Error(`When creating a new Font object, negative descender value is required.`);this.names={},this.names.unicode=Gc(e),this.names.macintosh=Gc(e),this.names.windows=Gc(e),this.unitsPerEm=e.unitsPerEm||1e3,this.ascender=e.ascender,this.descender=e.descender,this.createdTimestamp=e.createdTimestamp,this.italicAngle=e.italicAngle||0,this.weightClass=e.weightClass||0;let t=0;e.fsSelection?t=e.fsSelection:(this.italicAngle<0?t|=this.fsSelectionValues.ITALIC:this.italicAngle>0&&(t|=this.fsSelectionValues.OBLIQUE),this.weightClass>=600&&(t|=this.fsSelectionValues.BOLD),t===0&&(t=this.fsSelectionValues.REGULAR)),(!e.panose||!Array.isArray(e.panose))&&(e.panose=[0,0,0,0,0,0,0,0,0]),this.tables=Object.assign(e.tables,{os2:Object.assign({usWeightClass:e.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:e.widthClass||this.usWidthClasses.MEDIUM,bFamilyType:e.panose[0]||0,bSerifStyle:e.panose[1]||0,bWeight:e.panose[2]||0,bProportion:e.panose[3]||0,bContrast:e.panose[4]||0,bStrokeVariation:e.panose[5]||0,bArmStyle:e.panose[6]||0,bLetterform:e.panose[7]||0,bMidline:e.panose[8]||0,bXHeight:e.panose[9]||0,fsSelection:t},e.tables.os2)})}this.supported=!0,this.glyphs=new Jt.GlyphSet(this,e.glyphs||[]),this.encoding=new bt(this),this.position=new gi(this),this.substitution=new Di(this),this.tables=this.tables||{},this.tables=new Proxy(this.tables,{set:(e,t,n)=>(e[t]=n,e.fvar&&(e.gvar||e.cff2)&&!this.variation&&(this.variation=new Xi(this)),!0)}),this.palettes=new Oi(this),this.layers=new ki(this),this.svgImages=new Ai(this),this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){return this._hinting?this._hinting:this.outlinesFormat===`truetype`?this._hinting=new ds(this):null}})}Kc.prototype.hasChar=function(e){return this.encoding.charToGlyphIndex(e)>0},Kc.prototype.charToGlyphIndex=function(e){return this.encoding.charToGlyphIndex(e)},Kc.prototype.charToGlyph=function(e){let t=this.charToGlyphIndex(e),n=this.glyphs.get(t);return n||=this.glyphs.get(0),n},Kc.prototype.updateFeatures=function(e){return this.defaultRenderOptions.features.map(t=>t.script===`latn`?{script:`latn`,tags:t.tags.filter(t=>e[t])}:t)},Kc.prototype.stringToGlyphIndexes=function(e,t){let n=new Wc;n.registerModifier(`glyphIndex`,null,e=>this.charToGlyphIndex(e.char));let r=t?this.updateFeatures(t.features):this.defaultRenderOptions.features;return n.applyFeatures(this,r),n.getTextGlyphs(e)},Kc.prototype.stringToGlyphs=function(e,t){let n=this.stringToGlyphIndexes(e,t),r=n.length,i=Array(r),a=this.glyphs.get(0);for(let e=0;e<r;e+=1)i[e]=this.glyphs.get(n[e])||a;return i},Kc.prototype.nameToGlyphIndex=function(e){return this.glyphNames.nameToGlyphIndex(e)},Kc.prototype.nameToGlyph=function(e){let t=this.nameToGlyphIndex(e),n=this.glyphs.get(t);return n||=this.glyphs.get(0),n},Kc.prototype.glyphIndexToName=function(e){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(e):``},Kc.prototype.getKerningValue=function(e,t){e=e.index||e,t=t.index||t;let n=this.position.defaultKerningTables;return n?this.position.getKerningValue(n,e,t):this.kerningPairs[e+`,`+t]||0},Kc.prototype.defaultRenderOptions={kerning:!0,features:[{script:`arab`,tags:[`init`,`medi`,`fina`,`rlig`]},{script:`latn`,tags:[`liga`,`rlig`]},{script:`thai`,tags:[`liga`,`rlig`,`ccmp`]}],hinting:!1,usePalette:0,drawLayers:!0,drawSVG:!0},Kc.prototype.forEachGlyph=function(e,t,n,r,i,a){t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?72:r,i=Object.assign({},this.defaultRenderOptions,i);let o=1/this.unitsPerEm*r,s=this.stringToGlyphs(e,i),c;if(i.kerning){let e=i.script||this.position.getDefaultScriptName();c=this.position.getKerningTables(e,i.language)}for(let e=0;e<s.length;e+=1){let l=s[e];if(a.call(this,l,t,n,r,i),l.advanceWidth&&(t+=l.advanceWidth*o),i.kerning&&e<s.length-1){let n=c?this.position.getKerningValue(c,l.index,s[e+1].index):this.getKerningValue(l,s[e+1]);t+=n*o}i.letterSpacing?t+=i.letterSpacing*r:i.tracking&&(t+=i.tracking/1e3*r)}return t},Kc.prototype.getPath=function(e,t,n,r,i){i=Object.assign({},this.defaultRenderOptions,i);let a=new se;if(a._layers=[],Sn(this,a,r),a.stroke){let e=1/(a.unitsPerEm||1e3)*r;a.strokeWidth*=e}return this.forEachGlyph(e,t,n,r,i,(e,t,n,r)=>{let o=e.getPath(t,n,r,i,this);if(i.drawSVG||i.drawLayers){let e=o._layers;if(e&&e.length){for(let t=0;t<e.length;t++){let n=e[t];a._layers.push(n)}return}}a.extend(o)}),a},Kc.prototype.getPaths=function(e,t,n,r,i){i=Object.assign({},this.defaultRenderOptions,i);let a=[];return this.forEachGlyph(e,t,n,r,i,function(e,t,n,r){let o=e.getPath(t,n,r,i,this);a.push(o)}),a},Kc.prototype.getAdvanceWidth=function(e,t,n){return n=Object.assign({},this.defaultRenderOptions,n),this.forEachGlyph(e,0,0,t,n,function(){})},Kc.prototype.draw=function(e,t,n,r,i,a){this.getPath(t,n,r,i,a).draw(e)},Kc.prototype.drawPoints=function(e,t,n,r,i,a){a=Object.assign({},this.defaultRenderOptions,a),this.forEachGlyph(t,n,r,i,a,function(t,n,r,i){t.drawPoints(e,n,r,i,a,this)})},Kc.prototype.drawMetrics=function(e,t,n,r,i,a){a=Object.assign({},this.defaultRenderOptions,a),this.forEachGlyph(t,n,r,i,a,function(t,n,r,i){t.drawMetrics(e,n,r,i)})},Kc.prototype.getEnglishName=function(e){let t=(this.names.unicode||this.names.macintosh||this.names.windows)[e];if(t)return t.en},Kc.prototype.validate=function(){let e=[],t=this;function n(t,n){t||(console.warn(`[opentype.js] ${n}`),e.push(n))}function r(e){let r=t.getEnglishName(e);n(r&&r.trim().length>0,`No English `+e+` specified.`)}if(r(`fontFamily`),r(`weightName`),r(`manufacturer`),r(`copyright`),r(`version`),n(this.unitsPerEm>0,`No unitsPerEm specified.`),this.tables.colr){let e=this.tables.colr.baseGlyphRecords,t=-1;for(let r=0;r<e.length;r++){let i=e[r].glyphID;if(n(t<e[r].glyphID,`baseGlyphs must be sorted by GlyphID in ascending order, but glyphID ${i} comes after ${t}`),t>e[r].glyphID)break;t=i}}return e},Kc.prototype.toTables=function(){return li.fontToTable(this)},Kc.prototype.toBuffer=function(){return console.warn(`Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.`),this.toArrayBuffer()},Kc.prototype.toArrayBuffer=function(){let e=this.toTables().encode(),t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e[t];return t},Kc.prototype.download=function(){console.error(`DEPRECATED: platform-specific actions are to be implemented on user-side`)},Kc.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},Kc.prototype.macStyleValues={BOLD:1,ITALIC:2,UNDERLINE:4,OUTLINED:8,SHADOW:16,CONDENSED:32,EXTENDED:64},Kc.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},Kc.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};var qc=Kc;function Jc(e,t){let n=new G.Parser(e,t),r=n.parseUShort(),i=n.parseUShort();return r!==1&&console.warn(`Unsupported hvar table version ${r}.${i}`),{version:[r,i],itemVariationStore:n.parsePointer32(function(){return this.parseItemVariationStore()}),advanceWidth:n.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),lsb:n.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),rsb:n.parsePointer32(function(){return this.parseDeltaSetIndexMap()})}}function Yc(){console.warn(`Writing of hvar tables is not yet supported.`)}var Xc={make:Yc,parse:Jc},Zc=function(){return{coverage:this.parsePointer(W.coverage),attachPoints:this.parseList(W.pointer(W.uShortList))}},Qc=function(){var e=this.parseUShort();if(P.argument(e===1||e===2||e===3,`Unsupported CaretValue table version.`),e===1)return{coordinate:this.parseShort()};if(e===2)return{pointindex:this.parseShort()};if(e===3)return{coordinate:this.parseShort()}},$c=function(){return this.parseList(W.pointer(Qc))},el=function(){return{coverage:this.parsePointer(W.coverage),ligGlyphs:this.parseList(W.pointer($c))}},tl=function(){return this.parseUShort(),this.parseList(W.pointer(W.coverage))};function nl(e,t){t||=0;let n=new W(e,t),r=n.parseVersion(1);P.argument(r===1||r===1.2||r===1.3,`Unsupported GDEF table version.`);var i={version:r,classDef:n.parsePointer(W.classDef),attachList:n.parsePointer(Zc),ligCaretList:n.parsePointer(el),markAttachClassDef:n.parsePointer(W.classDef)};return r>=1.2&&(i.markGlyphSets=n.parsePointer(tl)),i}var rl={parse:nl},il=Array(10);il[1]=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(W.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(W.coverage),values:this.parseValueRecordList()};P.assert(!1,`0x`+e.toString(16)+`: GPOS lookup type 1 format must be 1 or 2.`)},il[2]=function(){let e=this.offset+this.relativeOffset,t=this.parseUShort();P.assert(t===1||t===2,`0x`+e.toString(16)+`: GPOS lookup type 2 format must be 1 or 2.`);let n=this.parsePointer(W.coverage),r=this.parseUShort(),i=this.parseUShort();if(t===1)return{posFormat:t,coverage:n,valueFormat1:r,valueFormat2:i,pairSets:this.parseList(W.pointer(W.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(i)}})))};if(t===2){let e=this.parsePointer(W.classDef),a=this.parsePointer(W.classDef),o=this.parseUShort(),s=this.parseUShort();return{posFormat:t,coverage:n,valueFormat1:r,valueFormat2:i,classDef1:e,classDef2:a,class1Count:o,class2Count:s,classRecords:this.parseList(o,W.list(s,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(i)}}))}}},il[3]=function(){return{error:`GPOS Lookup 3 not supported`}},il[4]=function(){return{error:`GPOS Lookup 4 not supported`}},il[5]=function(){return{error:`GPOS Lookup 5 not supported`}},il[6]=function(){return{error:`GPOS Lookup 6 not supported`}},il[7]=function(){return{error:`GPOS Lookup 7 not supported`}},il[8]=function(){return{error:`GPOS Lookup 8 not supported`}},il[9]=function(){return{error:`GPOS Lookup 9 not supported`}};function al(e,t){t||=0;let n=new W(e,t),r=n.parseVersion(1);return P.argument(r===1||r===1.1,`Unsupported GPOS table version `+r),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(il)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(il),variations:n.parseFeatureVariationsList()}}var ol=Array(10);function sl(e){return new U.Table(`GPOS`,[{name:`version`,type:`ULONG`,value:65536},{name:`scripts`,type:`TABLE`,value:new U.ScriptList(e.scripts)},{name:`features`,type:`TABLE`,value:new U.FeatureList(e.features)},{name:`lookups`,type:`TABLE`,value:new U.LookupList(e.lookups,ol)}])}var cl={parse:al,make:sl};function ll(e){let t={};e.skip(`uShort`);let n=e.parseUShort();P.argument(n===0,`Unsupported kern sub-table version.`),e.skip(`uShort`,2);let r=e.parseUShort();e.skip(`uShort`,3);for(let n=0;n<r;n+=1){let n=e.parseUShort(),r=e.parseUShort(),i=e.parseShort();t[n+`,`+r]=i}return t}function ul(e){let t={};e.skip(`uShort`),e.parseULong()>1&&console.warn(`Only the first kern subtable is supported.`),e.skip(`uLong`);let n=e.parseUShort()&255;if(e.skip(`uShort`),n===0){let n=e.parseUShort();e.skip(`uShort`,3);for(let r=0;r<n;r+=1){let n=e.parseUShort(),r=e.parseUShort(),i=e.parseShort();t[n+`,`+r]=i}}return t}function dl(e,t){let n=new G.Parser(e,t),r=n.parseUShort();if(r===0)return ll(n);if(r===1)return ul(n);throw Error(`Unsupported kern table version (`+r+`).`)}var fl={parse:dl};function pl(e,t,n,r){let i=new G.Parser(e,t),a=r?i.parseUShort:i.parseULong,o=[];for(let e=0;e<n+1;e+=1){let e=a.call(i);r&&(e*=2),o.push(e)}return o}var ml={parse:pl};function hl(e,t){let n=[],r=12;for(let i=0;i<t;i+=1){let t=G.getTag(e,r),i=G.getULong(e,r+4),a=G.getULong(e,r+8),o=G.getULong(e,r+12);n.push({tag:t,checksum:i,offset:a,length:o,compression:!1}),r+=16}return n}function gl(e,t){let n=[],r=44;for(let i=0;i<t;i+=1){let t=G.getTag(e,r),i=G.getULong(e,r+4),a=G.getULong(e,r+8),o=G.getULong(e,r+12),s;s=a<o&&`WOFF`,n.push({tag:t,offset:i,compression:s,compressedLength:a,length:o}),r+=20}return n}function _l(e,t){if(t.compression===`WOFF`){let n=new Uint8Array(e.buffer,t.offset+2,t.compressedLength-2),r=new Uint8Array(t.length);if(te(n,r),r.byteLength!==t.length)throw Error(`Decompression error: `+t.tag+` decompressed length doesn't match recorded length`);return{data:new DataView(r.buffer,0),offset:0}}return{data:e,offset:t.offset}}function vl(e,t={}){let n,r,i=new qc({empty:!0});e.constructor!==ArrayBuffer&&(e=new Uint8Array(e).buffer);let a=new DataView(e,0),o,s=[],c=G.getTag(a,0);if(c===`\0\0\0`||c===`true`||c===`typ1`)i.outlinesFormat=`truetype`,o=G.getUShort(a,4),s=hl(a,o);else if(c===`OTTO`)i.outlinesFormat=`cff`,o=G.getUShort(a,4),s=hl(a,o);else if(c===`wOFF`){let e=G.getTag(a,4);if(e===`\0\0\0`)i.outlinesFormat=`truetype`;else if(e===`OTTO`)i.outlinesFormat=`cff`;else throw Error(`Unsupported OpenType flavor `+c);o=G.getUShort(a,12),s=gl(a,o)}else if(c===`wOF2`)throw Error(`WOFF2 require an external decompressor library, see examples at: https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025`);else throw Error(`Unsupported OpenType signature `+c);let l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;for(let e=0;e<o;e+=1){let t=s[e],o;switch(t.tag){case`avar`:h=t;break;case`cmap`:o=_l(a,t),i.tables.cmap=pt.parse(o.data,o.offset),i.encoding=new xt(i.tables.cmap);break;case`cvt `:o=_l(a,t),E=new G.Parser(o.data,o.offset),i.tables.cvt=E.parseShortList(t.length/2);break;case`fvar`:d=t;break;case`STAT`:f=t;break;case`gvar`:p=t;break;case`cvar`:m=t;break;case`fpgm`:o=_l(a,t),E=new G.Parser(o.data,o.offset),i.tables.fpgm=E.parseByteList(t.length);break;case`head`:o=_l(a,t),i.tables.head=Hn.parse(o.data,o.offset),i.unitsPerEm=i.tables.head.unitsPerEm,n=i.tables.head.indexToLocFormat;break;case`hhea`:o=_l(a,t),i.tables.hhea=Gn.parse(o.data,o.offset),i.ascender=i.tables.hhea.ascender,i.descender=i.tables.hhea.descender,i.numberOfHMetrics=i.tables.hhea.numberOfHMetrics;break;case`HVAR`:x=t;break;case`hmtx`:b=t;break;case`ltag`:o=_l(a,t),r=$n.parse(o.data,o.offset);break;case`COLR`:o=_l(a,t),i.tables.colr=Sr.parse(o.data,o.offset);break;case`CPAL`:o=_l(a,t),i.tables.cpal=zt.parse(o.data,o.offset);break;case`maxp`:o=_l(a,t),i.tables.maxp=nr.parse(o.data,o.offset),i.numGlyphs=i.tables.maxp.numGlyphs;break;case`name`:w=t;break;case`OS/2`:o=_l(a,t),i.tables.os2=sr.parse(o.data,o.offset);break;case`post`:o=_l(a,t),i.tables.post=ur.parse(o.data,o.offset),i.glyphNames=new Ct(i.tables.post);break;case`prep`:o=_l(a,t),E=new G.Parser(o.data,o.offset),i.tables.prep=E.parseByteList(t.length);break;case`glyf`:g=t;break;case`loca`:C=t;break;case`CFF `:l=t;break;case`CFF2`:u=t;break;case`kern`:S=t;break;case`GDEF`:_=t;break;case`GPOS`:v=t;break;case`GSUB`:y=t;break;case`meta`:T=t;break;case`gasp`:try{o=_l(a,t),i.tables.gasp=Qr.parse(o.data,o.offset)}catch(e){console.warn(`Failed to parse gasp table, skipping.`),console.warn(e)}break;case`SVG `:o=_l(a,t),i.tables.svg=ti.parse(o.data,o.offset)}}let D=_l(a,w);if(i.tables.name=at.parse(D.data,D.offset,r),i.names=i.tables.name,g&&C){let e=n===0,r=_l(a,C),o=ml.parse(r.data,r.offset,i.numGlyphs,e),s=_l(a,g);i.glyphs=Ji.parse(s.data,s.offset,o,i,t)}else if(l){let e=_l(a,l);zn.parse(e.data,e.offset,i,t)}else if(u){let e=_l(a,u);zn.parse(e.data,e.offset,i,t)}else throw Error(`Font doesn't contain TrueType, CFF or CFF2 outlines.`);let O=_l(a,b);if(Xn.parse(i,O.data,O.offset,i.numberOfHMetrics,i.numGlyphs,i.glyphs,t),Et(i,t),S){let e=_l(a,S);i.kerningPairs=fl.parse(e.data,e.offset)}else i.kerningPairs={};if(_){let e=_l(a,_);i.tables.gdef=rl.parse(e.data,e.offset)}if(v){let e=_l(a,v);i.tables.gpos=cl.parse(e.data,e.offset),i.position.init()}if(y){let e=_l(a,y);i.tables.gsub=gr.parse(e.data,e.offset)}if(d){let e=_l(a,d);i.tables.fvar=kr.parse(e.data,e.offset,i.names)}if(f){let e=_l(a,f);i.tables.stat=Rr.parse(e.data,e.offset,i.tables.fvar)}if(p){d||console.warn(`This font provides a gvar table, but no fvar table, which is required for variable fonts.`),g||console.warn(`This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.`);let e=_l(a,p);i.tables.gvar=Yr.parse(e.data,e.offset,i.tables.fvar,i.glyphs)}if(m){d||console.warn(`This font provides a cvar table, but no fvar table, which is required for variable fonts.`),i.tables.cvt||console.warn(`This font provides a cvar table, but no cvt table which could be made variable.`),g||console.warn(`This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.`);let e=_l(a,m);i.tables.cvar=Kr.parse(e.data,e.offset,i.tables.fvar,i.tables.cvt||[])}if(h){d||console.warn(`This font provides an avar table, but no fvar table, which is required for variable fonts.`);let e=_l(a,h);i.tables.avar=Ur.parse(e.data,e.offset,i.tables.fvar)}if(x){d||console.warn(`This font provides an HVAR table, but no fvar table, which is required for variable fonts.`),b||console.warn(`This font provides an HVAR table, but no hmtx table to vary.`);let e=_l(a,x);i.tables.hvar=Xc.parse(e.data,e.offset,i.tables.fvar)}if(T){let e=_l(a,T);i.tables.meta=yr.parse(e.data,e.offset),i.metas=i.tables.meta}return i.palettes=new Oi(i),i}function yl(){console.error(`DEPRECATED! migrate to: opentype.parse(buffer, opt) See: https://github.com/opentypejs/opentype.js/issues/675`)}function bl(){console.error(`DEPRECATED! migrate to: opentype.parse(require("fs").readFileSync(url), opt)`)}return o(s)})();(function(e,n){typeof define==`function`&&define.amd?define(n):typeof t==`object`&&t.exports?t.exports=n():e.opentype=n()})(typeof self<`u`?self:e,()=>({...n,default:n}))}))(),1),oc=`/fonts/ShadowsIntoLight.ttf`,sc=new Map;function cc(e){let t=sc.get(e);return t||(t=fetch(e).then(e=>{if(!e.ok)throw Error(`Font request failed: ${e.status}`);return e.arrayBuffer()}).then(e=>ac.parse(e)),sc.set(e,t)),t}var lc=100;function uc({text:e,words:t,interval:n=3200,fontUrl:r=oc,duration:i=1.5,delay:a=.05,strokeWidth:o=1.6,fill:s=!0,height:c=`1.15em`,className:l}){let u=!!(t&&t.length>0),[d,f]=(0,h.useState)(0),p=u?t[d%t.length]:e??``,[m,g]=(0,h.useState)(null),[_,v]=(0,h.useState)(!1),[y,b]=(0,h.useState)(null),[x,S]=(0,h.useState)(!1),[C,w]=(0,h.useState)([]),T=(0,h.useRef)([]),E=typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;if((0,h.useEffect)(()=>{if(!u)return;let e=setInterval(()=>f(e=>e+1),n);return()=>clearInterval(e)},[u,n]),(0,h.useEffect)(()=>{let e=!1;return cc(r).then(t=>{e||g(t)}).catch(()=>{e||v(!0)}),()=>{e=!0}},[r]),(0,h.useEffect)(()=>{if(!m||!p)return;let e=m.getPath(p,0,lc,lc),t=e.getBoundingBox(),n=lc*.12,r=e.toPathData(2);b({full:r,contours:r.split(/(?=M)/).filter(e=>e.trim().length>1),x:t.x1-n,y:t.y1-n,w:t.x2-t.x1+24,h:t.y2-t.y1+24}),S(!1),w([])},[m,p]),(0,h.useEffect)(()=>{if(!y)return;w(T.current.slice(0,y.contours.length).map(e=>e?e.getTotalLength():0));let e=requestAnimationFrame(()=>requestAnimationFrame(()=>S(!0)));return()=>cancelAnimationFrame(e)},[y]),_)return(0,$.jsx)(`span`,{className:l,children:p});if(!y)return null;let D=Math.max(1,y.contours.length);return(0,$.jsxs)(`svg`,{viewBox:`${y.x} ${y.y} ${y.w} ${y.h}`,role:`img`,"aria-label":p,className:[`inline-block`,l].filter(Boolean).join(` `),style:{height:c,width:`calc(${c} * ${(y.w/y.h).toFixed(4)})`,overflow:`visible`},children:[s&&(0,$.jsx)(`path`,{d:y.full,fill:`currentColor`,stroke:`none`,style:{opacity:+!!x,transition:x&&!E?`opacity 0.45s ease-out ${(a+i*.72).toFixed(3)}s`:`none`}}),y.contours.map((e,t)=>{let n=C[t]||0,r=i/D*2.4,s=a+t/D*i;return(0,$.jsx)(`path`,{ref:e=>{T.current[t]=e},d:e,fill:`none`,stroke:`currentColor`,strokeWidth:o,strokeLinecap:`round`,strokeLinejoin:`round`,style:{strokeDasharray:n||1,strokeDashoffset:x?0:n||1,transition:x&&!E?`stroke-dashoffset ${r.toFixed(3)}s ease-out ${s.toFixed(3)}s`:`none`}},t)})]},p)}var dc=.09;function fc({text:e,startIndex:t=0}){return(0,$.jsx)($.Fragment,{children:e.split(``).map((e,n)=>(0,$.jsx)(`span`,{className:`hero-name-char`,style:{animationDelay:`${(t+n)*dc}s`},children:e},n))})}function pc(){return(0,$.jsxs)(`section`,{id:`hero`,children:[(0,$.jsx)(`div`,{className:`hero-grid`}),(0,$.jsx)(`div`,{className:`container hero-inner`,children:(0,$.jsxs)(`div`,{className:`hero-text`,children:[(0,$.jsxs)(`h1`,{className:`hero-name`,"aria-label":`Алексей Лисин`,children:[(0,$.jsx)(`span`,{className:`hero-name-plain`,"aria-hidden":`true`,children:(0,$.jsx)(fc,{text:`Алексей`})}),(0,$.jsx)(`span`,{className:`hero-name-grad`,"aria-hidden":`true`,children:(0,$.jsx)(fc,{text:`Лисин`,startIndex:7})})]}),(0,$.jsx)(uc,{text:`Product manager`,className:`hero-signature`,height:`calc(var(--hero-name-fs) * 0.6)`,delay:.7,duration:.8}),(0,$.jsx)(`p`,{className:`hero-desc`,children:`Работаю над финансовыми и кредитными продуктами — от идеи до запуска и масштабирования. В IT уже 10 лет, последние пять — в продуктовом управлении. Разбираюсь в технической части, метриках и в управлении командами. Мне интересны задачи, где одновременно нужно думать как инженер и принимать решения как менеджер.`}),(0,$.jsxs)(`div`,{className:`hero-cta-group`,children:[(0,$.jsx)(`a`,{href:`#skills`,className:`hero-cta hero-cta-secondary`,children:`Обо мне`}),(0,$.jsx)(`a`,{href:`#contact`,className:`hero-cta hero-cta-primary`,children:`Написать`})]})]})})]})}var mc=o(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),hc=o(`arrow-left-right`,[[`path`,{d:`M8 3 4 7l4 4`,key:`9rb6wj`}],[`path`,{d:`M4 7h16`,key:`6tx8e3`}],[`path`,{d:`m16 21 4-4-4-4`,key:`siv7j2`}],[`path`,{d:`M20 17H4`,key:`h6l3hr`}]]),gc=o(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),_c=o(`badge-check`,[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,key:`3c2336`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]]),vc=o(`calendar-clock`,[[`path`,{d:`M16 14v2.2l1.6 1`,key:`fo4ql5`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`path`,{d:`M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338`,key:`7hb8p4`}],[`path`,{d:`M3 9h5.859`,key:`numkqi`}],[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]]),yc=o(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),bc=o(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),xc=o(`store`,[[`path`,{d:`M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5`,key:`slp6dd`}],[`path`,{d:`M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244`,key:`o0xfot`}],[`path`,{d:`M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05`,key:`wn3emo`}]]),Sc=o(`timer`,[[`line`,{x1:`10`,x2:`14`,y1:`2`,y2:`2`,key:`14vaq8`}],[`line`,{x1:`12`,x2:`15`,y1:`14`,y2:`11`,key:`17fdiu`}],[`circle`,{cx:`12`,cy:`14`,r:`8`,key:`1e1u0o`}]]),Cc=o(`users-round`,[[`path`,{d:`M18 21a8 8 0 0 0-16 0`,key:`3ypg7q`}],[`circle`,{cx:`10`,cy:`8`,r:`5`,key:`o932ke`}],[`path`,{d:`M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3`,key:`10s06x`}]]),wc=o(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]);function Tc(){return(0,$.jsx)(`section`,{id:`products`,children:(0,$.jsxs)(`div`,{className:`container`,children:[(0,$.jsxs)(`div`,{className:`products-head reveal`,children:[(0,$.jsx)(`div`,{className:`s-label`,children:`Продукты и проекты`}),(0,$.jsxs)(`h2`,{className:`s-title`,children:[`То, что я `,(0,$.jsx)(`span`,{children:`строил и запускал`})]})]}),(0,$.jsxs)(`div`,{className:`p-product reveal`,children:[(0,$.jsxs)(`div`,{className:`p-identity`,children:[(0,$.jsx)(`div`,{className:`p-type`,children:`BNPL · Сбер`}),(0,$.jsx)(`div`,{className:`p-title`,children:`«Плати частями»`}),(0,$.jsx)(`p`,{className:`p-desc`,children:`Спроектировал и запустил сервис с нуля за 3 месяца. В процессе развития выстроил несколько каналов оформления: онлайн, офлайн на терминалах, white-label-интеграцию для партнёров и SDK внутри SberPay. Сервис интегрирован с 20 внутренними и внешними системами, включающими более 100 сервисов. Внедрил многоуровневую антифрод-защиту — скоринг, противодействие социальной инженерии, анализ данных устройств и поведения пользователей. Настроил технический и бизнес-мониторинг с регламентом реагирования на инциденты. Построил сквозную аналитику по всей воронке продаж.`}),(0,$.jsx)(`div`,{className:`p-year`,children:`2022 – 2026`})]}),(0,$.jsxs)(a,{children:[(0,$.jsxs)(d,{children:[(0,$.jsx)(t,{className:`p-icon`}),(0,$.jsxs)(`div`,{className:`p-val`,children:[(0,$.jsx)(e,{target:20}),` млрд\xA0₽`]}),(0,$.jsx)(`div`,{className:`p-label`,children:`Годовой оборот сервиса`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(wc,{className:`p-icon`}),(0,$.jsxs)(`div`,{className:`p-val`,children:[(0,$.jsx)(e,{target:800}),`+`]}),(0,$.jsx)(`div`,{className:`p-label`,children:`Партнёров в онлайне`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(xc,{className:`p-icon`}),(0,$.jsxs)(`div`,{className:`p-val`,children:[(0,$.jsx)(e,{target:50}),` тыс.+`]}),(0,$.jsx)(`div`,{className:`p-label`,children:`Офлайн-терминалов по всей России`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(f,{className:`p-icon`}),(0,$.jsx)(`div`,{className:`p-val`,children:`×16`}),(0,$.jsx)(`div`,{className:`p-label`,children:`Снижение доли мошеннических заказов (с 8% до 0,5%)`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(l,{className:`p-icon`}),(0,$.jsxs)(`div`,{className:`p-val`,children:[`+`,(0,$.jsx)(e,{target:11}),`%`]}),(0,$.jsx)(`div`,{className:`p-label`,children:`Рост конверсии оплаты после запуска сценария в один клик`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(Sc,{className:`p-icon`}),(0,$.jsx)(`div`,{className:`p-val`,children:`2 мин`}),(0,$.jsx)(`div`,{className:`p-label`,children:`MTTR — снизили с 3 ч`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(_c,{className:`p-icon`}),(0,$.jsxs)(`div`,{className:`p-val`,children:[(0,$.jsx)(e,{target:80}),`%`]}),(0,$.jsx)(`div`,{className:`p-label`,children:`Соответствие экосистемным стандартам Сбера — рост с 20%`})]})]})]}),(0,$.jsxs)(`div`,{className:`p-product reveal`,children:[(0,$.jsxs)(`div`,{className:`p-identity`,children:[(0,$.jsx)(`div`,{className:`p-type`,children:`POS · Сбер`}),(0,$.jsx)(`div`,{className:`p-title`,children:`«Покупай со Сбером»`}),(0,$.jsx)(`p`,{className:`p-desc`,children:`Спроектировал архитектуру и API для переноса интеграций в контур банка. Организовал единый релизный цикл между пятью командами. Лично запустил миграцию первых партнёров — основу, на которой банк позже перевёл 40 тыс. партнёров.`}),(0,$.jsx)(`div`,{className:`p-year`,children:`2021 – 2022`})]}),(0,$.jsxs)(a,{children:[(0,$.jsxs)(d,{children:[(0,$.jsx)(hc,{className:`p-icon`}),(0,$.jsxs)(`div`,{className:`p-val`,children:[(0,$.jsx)(e,{target:40}),` тыс.`]}),(0,$.jsx)(`div`,{className:`p-label`,children:`Партнёров мигрировало на решение банка`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(Cc,{className:`p-icon`}),(0,$.jsx)(`div`,{className:`p-val`,children:`5 команд`}),(0,$.jsx)(`div`,{className:`p-label`,children:`Синхронная разработка и единый релизный цикл`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(vc,{className:`p-icon`}),(0,$.jsx)(`div`,{className:`p-val`,children:`2 года`}),(0,$.jsx)(`div`,{className:`p-label`,children:`Полный отказ от внешнего вендора`})]}),(0,$.jsxs)(d,{children:[(0,$.jsx)(mc,{className:`p-icon`}),(0,$.jsx)(`div`,{className:`p-val`,children:`99,9%`}),(0,$.jsx)(`div`,{className:`p-label`,children:`SLA доступности сервиса`})]})]})]})]})})}function Ec(){return(0,$.jsx)(`section`,{id:`skills`,children:(0,$.jsxs)(`div`,{className:`container`,children:[(0,$.jsxs)(`div`,{className:`reveal`,children:[(0,$.jsx)(`div`,{className:`s-label`,children:`Компетенции`}),(0,$.jsxs)(`h2`,{className:`s-title`,children:[`Чем могу `,(0,$.jsx)(`span`,{children:`быть полезен`})]})]}),(0,$.jsxs)(`div`,{className:`val-grid`,children:[(0,$.jsxs)(`div`,{className:`val-item reveal`,children:[(0,$.jsx)(`div`,{className:`val-num`,children:`01`}),(0,$.jsx)(`div`,{className:`val-title`,children:`Управление командами`}),(0,$.jsx)(`p`,{className:`val-desc`,children:`Собираю и синхронизирую распределённые команды, выстраиваю процессы, а не просто слежу за ними. Управлял командой до 30 человек: две внутренние команды и подрядчик.`})]}),(0,$.jsxs)(`div`,{className:`val-item reveal d1`,children:[(0,$.jsx)(`div`,{className:`val-num`,children:`02`}),(0,$.jsx)(`div`,{className:`val-title`,children:`Технические интеграции`}),(0,$.jsx)(`p`,{className:`val-desc`,children:`Понимаю устройство систем изнутри, работаю с командой разработчиков напрямую, без переводчика — от API-дизайна до разбора инцидентов в проде.`})]}),(0,$.jsxs)(`div`,{className:`val-item reveal`,children:[(0,$.jsx)(`div`,{className:`val-num`,children:`03`}),(0,$.jsx)(`div`,{className:`val-title`,children:`Переговоры и стейкхолдеры`}),(0,$.jsx)(`p`,{className:`val-desc`,children:`Нахожу общий язык с любым подразделением — от безопасности и юристов до топ-менеджмента. Выступал перед аудиторией 100+ человек, защищал продуктовую стратегию на уровне генерального директора.`})]}),(0,$.jsxs)(`div`,{className:`val-item reveal d1`,children:[(0,$.jsx)(`div`,{className:`val-num`,children:`04`}),(0,$.jsx)(`div`,{className:`val-title`,children:`Метрики и данные`}),(0,$.jsx)(`p`,{className:`val-desc`,children:`Строю сквозную аналитику и принимаю решения по данным, а не по ощущениям. Отслеживал MAU, CR, Take Rate, Approval Rate, CSI, Error Rate — по каждому каналу отдельно.`})]})]})]})})}function Dc(){return(0,$.jsx)(`section`,{id:`tools`,children:(0,$.jsxs)(`div`,{className:`container`,children:[(0,$.jsxs)(`div`,{className:`tools-head reveal`,children:[(0,$.jsx)(`div`,{className:`s-label`,children:`Личные проекты`}),(0,$.jsxs)(`h2`,{className:`s-title`,children:[`Инструменты для работы `,(0,$.jsx)(`span`,{children:`с LLM и агентами`})]})]}),(0,$.jsxs)(`div`,{className:`tools-grid`,children:[(0,$.jsxs)(`a`,{href:`/llm-burnwatch/`,className:`tool-card reveal`,children:[(0,$.jsx)(`div`,{className:`tool-card-icon`,children:(0,$.jsx)(yc,{})}),(0,$.jsx)(`div`,{className:`tool-card-title`,children:`LLM Burnwatch`}),(0,$.jsx)(`div`,{className:`tool-card-desc`,children:`Локальный контроль расходов на LLM. Сам учится норме по вашим вызовам и ловит аномалии — зацикливание агента, скачок цены, превышение бюджета.`}),(0,$.jsxs)(`div`,{className:`tool-card-link`,children:[`Открыть проект `,(0,$.jsx)(gc,{className:`tool-card-link-icon`})]})]}),(0,$.jsxs)(`div`,{className:`tool-card tool-card-soon reveal d1`,children:[(0,$.jsx)(`div`,{className:`tool-card-icon`,children:(0,$.jsx)(bc,{})}),(0,$.jsx)(`div`,{className:`tool-card-title`,children:`Что-то новое уже в работе`}),(0,$.jsx)(`div`,{className:`tool-card-desc`,children:`Скоро здесь появится ещё один проект — не переключайтесь.`})]})]})]})})}function Oc(){return(0,$.jsx)(`section`,{id:`timeline`,children:(0,$.jsxs)(`div`,{className:`container`,children:[(0,$.jsxs)(`div`,{className:`reveal`,children:[(0,$.jsx)(`div`,{className:`s-label`,children:`Карьера`}),(0,$.jsxs)(`h2`,{className:`s-title`,children:[`Пройденный `,(0,$.jsx)(`span`,{children:`путь`})]})]}),(0,$.jsxs)(`div`,{className:`tl`,children:[(0,$.jsxs)(`div`,{className:`tl-item tl-current reveal`,children:[(0,$.jsx)(`div`,{className:`tl-badge`,children:`10 лет`}),(0,$.jsx)(`span`,{className:`tl-dot`}),(0,$.jsxs)(`div`,{className:`tl-body`,children:[(0,$.jsx)(`div`,{className:`tl-co`,children:`Сбер`}),(0,$.jsx)(`div`,{className:`tl-role`,children:`Product Manager → Lead Product Manager`})]}),(0,$.jsx)(`div`,{className:`tl-yr`,children:`2021 – 2026`})]}),(0,$.jsxs)(`div`,{className:`tl-item reveal d1`,children:[(0,$.jsx)(`span`,{className:`tl-dot`}),(0,$.jsxs)(`div`,{className:`tl-body`,children:[(0,$.jsx)(`div`,{className:`tl-co`,children:`СофтТелематика`}),(0,$.jsx)(`div`,{className:`tl-role`,children:`Senior Business Systems Analyst`})]}),(0,$.jsx)(`div`,{className:`tl-yr`,children:`2020 – 2021`})]}),(0,$.jsxs)(`div`,{className:`tl-item reveal d2`,children:[(0,$.jsx)(`span`,{className:`tl-dot`}),(0,$.jsxs)(`div`,{className:`tl-body`,children:[(0,$.jsx)(`div`,{className:`tl-co`,children:`МТС ИТ`}),(0,$.jsx)(`div`,{className:`tl-role`,children:`Senior Business Analyst (Technical)`})]}),(0,$.jsx)(`div`,{className:`tl-yr`,children:`2019 – 2020`})]}),(0,$.jsxs)(`div`,{className:`tl-item reveal d3`,children:[(0,$.jsx)(`span`,{className:`tl-dot`}),(0,$.jsxs)(`div`,{className:`tl-body`,children:[(0,$.jsx)(`div`,{className:`tl-co`,children:`МОЦ ИКТ`}),(0,$.jsx)(`div`,{className:`tl-role`,children:`System Analyst → Middle System Analyst`})]}),(0,$.jsx)(`div`,{className:`tl-yr`,children:`2016 – 2019`})]})]})]})})}function kc(){return(0,$.jsx)(`section`,{id:`contact`,children:(0,$.jsx)(`div`,{className:`container`,children:(0,$.jsx)(`div`,{className:`contact-inner`,children:(0,$.jsxs)(`div`,{className:`reveal`,children:[(0,$.jsx)(`div`,{className:`s-label`,children:`Контакты`}),(0,$.jsxs)(`h2`,{className:`contact-title`,children:[`Открыт к `,(0,$.jsx)(`span`,{children:`диалогу`})]}),(0,$.jsxs)(`div`,{className:`contact-links`,children:[(0,$.jsxs)(`a`,{href:`tel:+79154793140`,className:`contact-link reveal`,children:[(0,$.jsx)(`div`,{className:`cl-icon`,children:(0,$.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z`})})}),(0,$.jsxs)(`div`,{className:`cl-info`,children:[(0,$.jsx)(`div`,{className:`cl-lbl`,children:`Телефон`}),(0,$.jsx)(`div`,{className:`cl-val`,children:`+7 (915) 479-31-40`})]})]}),(0,$.jsxs)(`a`,{href:`https://t.me/FatBros`,className:`contact-link reveal d1`,target:`_blank`,rel:`noopener`,children:[(0,$.jsx)(`div`,{className:`cl-icon`,children:(0,$.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M21.198 2.433a2.242 2.242 0 0 0-1.022.215L3.02 9.65c-1.14.459-1.121 1.583-.197 1.865l4.34 1.376 1.937 5.96c.247.757 1.076.963 1.63.487l2.347-2.01 4.51 3.394c.829.622 1.99.229 2.24-.758l3.19-14.206c.27-1.188-.539-2.013-1.82-1.325z`})})}),(0,$.jsxs)(`div`,{className:`cl-info`,children:[(0,$.jsx)(`div`,{className:`cl-lbl`,children:`Telegram`}),(0,$.jsx)(`div`,{className:`cl-val`,children:`@FatBros`})]})]})]})]})})})})}function Ac(){return p(),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`fixed inset-0 -z-10 pointer-events-none`,children:(0,$.jsx)(ec,{})}),(0,$.jsx)(tc,{}),(0,$.jsx)(ic,{}),(0,$.jsx)(pc,{}),(0,$.jsx)(Tc,{}),(0,$.jsx)(Ec,{}),(0,$.jsx)(Dc,{}),(0,$.jsx)(Oc,{}),(0,$.jsx)(kc,{}),(0,$.jsx)(c,{})]})}(0,g.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(h.StrictMode,{children:(0,$.jsx)(Ac,{})}));