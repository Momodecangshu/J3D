/*

J3D, a Javascript/WebGL 3D egnine
Created by Bartek Drozdz <bartek@everydayflash.com>
http://www.everyday3d.com/j3d/ 

Uses the following libraries:

glMatrix, Copyright (c) 2010 Brandon Jone
http://code.google.com/p/glmatrix/

requestAnimationFrame
http://paulirish.com/2011/requestanimationframe-for-smart-animating/

*/
// glMatrix v0.9.5
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};
mat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*
g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};
mat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*
v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=
o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};J3D={};J3D.SHADER_MAX_LIGHTS=4;var v3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};v3.prototype.set=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};v3.prototype.magSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z};v3.prototype.mag=function(){return Math.sqrt(this.magSq())};v3.prototype.mul=function(a){return new v3(this.x*a,this.y*a,this.z*a)};v3.prototype.neg=function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this};
v3.prototype.norm=function(){var a=1/this.mag();this.set(this.x*a,this.y*a,this.z*a);return this};v3.prototype.cp=function(){return new v3(this.x,this.y,this.z)};v3.prototype.add=function(a){return v3.add(this,a)};v3.prototype.xyz=function(){return[this.x,this.y,this.z]};v3.add=function(a,b){var c=new v3(a.x,a.y,a.z);c.x+=b.x;c.y+=b.y;c.z+=b.z;return c};v3.prototype.sub=function(a){return v3.sub(this,a)};v3.sub=function(a,b){var c=new v3(a.x,a.y,a.z);c.x-=b.x;c.y-=b.y;c.z-=b.z;return c};
v3.dot=function(a,b){return a.x*b.x+a.y*b.y+a.z*b.z};v3.cross=function(a,b){return new v3(a.y*b.z-a.z*b.y,a.z*b.x-a.x*b.z,a.x*b.y-a.y*b.x)};v3.ZERO=function(){return new v3(0,0,0)};v3.ONE=function(){return new v3(1,1,1)};v3.RIGHT=function(){return new v3(1,0,0)};v3.UP=function(){return new v3(0,1,0)};v3.FORWARD=function(){return new v3(0,0,1)};var m44=function(){this.array=new Float32Array(16);this.identity()};m44.prototype.identity=function(){this.n11=1;this.n21=this.n14=this.n13=this.n12=0;this.n22=1;this.n32=this.n31=this.n24=this.n23=0;this.n33=1;this.n43=this.n42=this.n41=this.n34=0;this.n44=1};m44.prototype.perspective=function(a,b,c,d){a=c*Math.tan(a*Math.PI/360);var f=d-c;this.n11=c/(a*b);this.n22=c/a;this.n33=-(d+c)/f;this.n34=-(2*d*c)/f;this.n43=-1;this.n44=0;this.makeArray()};
m44.prototype.makeArray=function(){this.array[0]=this.n11;this.array[1]=this.n21;this.array[2]=this.n31;this.array[3]=this.n41;this.array[4]=this.n12;this.array[5]=this.n22;this.array[6]=this.n32;this.array[7]=this.n42;this.array[8]=this.n13;this.array[9]=this.n23;this.array[10]=this.n33;this.array[11]=this.n43;this.array[12]=this.n14;this.array[13]=this.n24;this.array[14]=this.n34;this.array[15]=this.n44};m44.prototype.toArray=function(){return this.array};var gl;J3D.Engine=function(){var a;a=document.createElement("canvas");a.width=window.innerWidth;a.height=window.innerHeight;document.body.appendChild(a);try{gl=a.getContext("experimental-webgl"),gl.viewportWidth=a.width,gl.viewportHeight=a.height}catch(b){console.log("Error initializing webgl: "+b)}gl.clearColor(0,0,0,1);gl.enable(gl.DEPTH_TEST);gl.cullFace(gl.FRONT);this.gl=gl;this.shaderAtlas=new J3D.ShaderAtlas;this.scene=new J3D.Scene;this.canvas=a;this._opaqueMeshes=[];this._lights=[]};
J3D.Engine.prototype.render=function(){J3D.Time.tick();gl.viewport(0,0,gl.viewportWidth,gl.viewportHeight);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);this._opaqueMeshes.length=0;for(var a=this._lights.length=0;a<this.scene.numChildren;a++)this.updateTransform(this.scene.childAt(a),null);this.camera.updateInverse();for(a=0;a<this._lights.length;a++){var b=this._lights[a];b.updateWorldPosition(this.camera.inverseMat)}for(a=0;a<this._opaqueMeshes.length;a++){b=this._opaqueMeshes[a];var c=this.shaderAtlas.getShader(b.renderer);
b.updateViewAndNormal(this.camera.inverseMat);gl.useProgram(c);b.renderer.setup(b.mesh,c,this._lights,this.scene.ambient);gl.uniformMatrix4fv(c.projMat,!1,this.camera.projectionMat.toArray());gl.uniformMatrix4fv(c.mvMat,!1,b.viewMatrix);gl.uniformMatrix3fv(c.nMat,!1,b.normalMatrix);b.enabled&&b.mesh.draw()}gl.enable(gl.DEPTH_TEST);gl.disable(gl.BLEND)};
J3D.Engine.prototype.updateTransform=function(a,b){a.updateWorld(b);for(var c=0;c<a.numChildren;c++)this.updateTransform(a.childAt(c),a);a.enabled&&(a.renderer&&a.mesh&&this._opaqueMeshes.push(a),a.light&&this._lights.push(a))};J3D.Scene=function(){var a=this,b=[];this.add=function(c){b.push(c);c.parent=null;a.numChildren=b.length;return c};this.childAt=function(a){return b[a]};this.ambient=J3D.Color.black};J3D.Loader={};J3D.Loader.loadJSON=function(a,b){var c=new XMLHttpRequest;c.open("GET",a);c.onreadystatechange=function(){c.readyState==4&&b.call(null,JSON.parse(c.responseText))};c.send()};
J3D.Loader.parseJSONScene=function(a,b,c){c.scene.ambient=J3D.Loader.fromObject(J3D.Color,a.ambient);for(var d in a.materials){var f=a.materials[d];f=J3D.Loader.fromObject(J3D[f.type],f);f.color=J3D.Loader.fromObject(J3D.Color,f.color);a.materials[d]=f}for(var g in a.lights){d=a.lights[g];d=J3D.Loader.fromObject(J3D.Light,d);d.color=J3D.Loader.fromObject(J3D.Color,d.color);if(d.direction)d.direction=J3D.Loader.v3FromArray(d.direction);a.lights[g]=d}for(var e in a.cameras)g=a.cameras[e],g=new J3D.Camera(g.fov,
null,g.near,g.far),a.cameras[e]=g,c.camera=g;for(var h in a.transforms){e=a.transforms[h];e=J3D.Loader.fromObject(J3D.Transform,e);e.position=J3D.Loader.v3FromArray(e.position);e.rotation=J3D.Loader.v3FromArray(e.rotation);if(e.renderer)e.renderer=a.materials[e.renderer];if(e.mesh)e.mesh=new J3D.Mesh(b[e.mesh]);if(e.light)e.light=a.lights[e.light];if(e.camera)a.cameras[e.camera].transform=e,e.camera=a.cameras[e.camera];a.transforms[h]=e}for(h in a.transforms)e=a.transforms[h],e.parent?(e.parent=a.transforms[e.parent],
e.parent.add(e)):c.scene.add(e)};J3D.Loader.fromObject=function(a,b){var c=new a,d;for(d in b)c[d]=b[d];return c};J3D.Loader.v3FromArray=function(a){return new v3(a[0],a[1],a[2])};J3D.Mesh=function(a){this.vertSize=3;this.uvSize=2;this.colorSize=4;this.vertices=new Float32Array(a.vertices);this.vertNum=a.vertices.length/this.vertSize;this.tris=new Uint16Array(a.tris);this.triNum=a.tris.length;this.colors=new Float32Array(a.colors);this.normals=new Float32Array(a.normals);this.uv1=(this.hasUV1=a.uv1.length>0)?new Float32Array(a.uv1):new Float32Array(this.vertNum*this.uvSize);this.buffersReady=!1;this.bindBuffers()};
J3D.Mesh.prototype.draw=function(){gl.drawElements(gl.TRIANGLES,this.triNum,gl.UNSIGNED_SHORT,0)};
J3D.Mesh.prototype.bindBuffers=function(){if(!this.buffersReady)this.vertBuf=gl.createBuffer(),gl.bindBuffer(gl.ARRAY_BUFFER,this.vertBuf),gl.bufferData(gl.ARRAY_BUFFER,this.vertices,gl.STATIC_DRAW),this.colorBuf=gl.createBuffer(),gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuf),gl.bufferData(gl.ARRAY_BUFFER,this.colors,gl.STATIC_DRAW),this.normBuf=gl.createBuffer(),gl.bindBuffer(gl.ARRAY_BUFFER,this.normBuf),gl.bufferData(gl.ARRAY_BUFFER,this.normals,gl.STATIC_DRAW),this.uv1buf=gl.createBuffer(),gl.bindBuffer(gl.ARRAY_BUFFER,
this.uv1buf),gl.bufferData(gl.ARRAY_BUFFER,this.uv1,gl.STATIC_DRAW),this.triBuf=gl.createBuffer(),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.triBuf),gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this.tris,gl.STATIC_DRAW),this.buffersReady=!0};J3D.Light=function(a){this.type=a||J3D.NONE;this.direction=v3.ZERO();this.color=J3D.Color.white};J3D.NONE=parseInt(0);J3D.DIRECT=parseInt(1);J3D.POINT=parseInt(2);J3D.Camera=function(a,b,c,d){c=c||1;d=d||1E3;b=b||gl.viewportWidth/gl.viewportHeight;this.projectionMat=new m44;this.projectionMat.perspective(a,b,c,d);this.inverseMat=mat4.create();this.transform=new J3D.Transform};J3D.Camera.prototype.updateInverse=function(){mat4.inverse(this.transform.globalMatrix,this.inverseMat)};J3D.Texture=function(a){var b=this;this.tex=gl.createTexture();typeof a=="string"&&function(a){b.src=new Image;b.src.onload=function(){gl.bindTexture(gl.TEXTURE_2D,b.tex);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!0);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,b.src);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.bindTexture(gl.TEXTURE_2D,null)};b.src.src=a}(a)};J3D.Transform=function(){var a=this,b=[];this.numChildren=0;this.position=v3.ZERO();this.rotation=v3.ZERO();this.scale=v3.ONE();this.worldPosition=v3.ZERO();this.matrix=mat4.create();this.globalMatrix=mat4.create();this.viewMatrix=mat4.create();this.normalMatrix=mat3.create();this._lockedMatrix=this.isStatic=!1;this.enabled=!0;this.add=function(c){b.push(c);a.numChildren=b.length;return c};this.childAt=function(a){return b[a]}};
J3D.Transform.prototype.clone=function(){var a=new J3D.Transform;a.position=this.position.cp();a.rotation=this.rotation.cp();a.scale=this.scale.cp();a.isStatic=this.isStatic;a.renderer=this.renderer;a.mesh=this.mesh;a.camera=this.camera;a.light=this.light;return a};
J3D.Transform.prototype.updateWorld=function(a){if(!this._lockedMatrix&&(mat4.identity(this.matrix),mat4.translate(this.matrix,[this.position.x,this.position.y,this.position.z]),mat4.rotateZ(this.matrix,this.rotation.z),mat4.rotateX(this.matrix,this.rotation.x),mat4.rotateY(this.matrix,this.rotation.y),mat4.scale(this.matrix,[this.scale.x,this.scale.y,this.scale.z]),a!=null?mat4.multiply(a.globalMatrix,this.matrix,this.globalMatrix):this.globalMatrix=this.matrix,this.isStatic))this._lockedMatrix=
!0};J3D.Transform.prototype.updateViewAndNormal=function(a){mat4.multiply(a,this.globalMatrix,this.viewMatrix);mat4.toInverseMat3(this.viewMatrix,this.normalMatrix);mat3.transpose(this.normalMatrix)};J3D.Transform.prototype.updateWorldPosition=function(a){var b=this.position.xyz();mat4.multiplyVec3(this.globalMatrix,b);mat4.multiplyVec3(a,b);this.worldPosition.x=b[0];this.worldPosition.y=b[1];this.worldPosition.z=b[2]};J3D.ShaderSource={};J3D.ShaderAtlas=function(){this.shaders={};this.programs={};this.shaderCount=0};J3D.ShaderAtlas.prototype.compileShaderSource=function(a,b,c){b=c==gl.VERTEX_SHADER?J3D.ShaderSource.CommonInclude+J3D.ShaderSource.VertexInclude+b:J3D.ShaderSource.CommonInclude+b;c=gl.createShader(c);gl.shaderSource(c,b);gl.compileShader(c);gl.getShaderParameter(c,gl.COMPILE_STATUS)||console.log("Shader compile error: "+gl.getShaderInfoLog(c));this.programs[a]=c};
J3D.ShaderAtlas.prototype.linkShader=function(a){var b=a.name,c=this.programs[b+"Vert"],d=this.programs[b+"Frag"],f=gl.createProgram();gl.attachShader(f,c);gl.attachShader(f,d);gl.linkProgram(f);gl.getProgramParameter(f,gl.LINK_STATUS)||console.log("Error creating program "+b);gl.useProgram(f);a.setupLocations(f);this.shaderCount++;this.shaders[b]=f};
J3D.ShaderAtlas.prototype.getShader=function(a){this.shaders[a.name]||(this.compileShaderSource(a.name+"Vert",a.vertSource(),gl.VERTEX_SHADER),this.compileShaderSource(a.name+"Frag",a.fragSource(),gl.FRAGMENT_SHADER),this.linkShader(a));return this.shaders[a.name]};J3D.Normal2Color=function(){this.name="Normal2Color"};J3D.Normal2Color.prototype.vertSource=function(){return J3D.ShaderSource.Normal2ColorVertex};J3D.Normal2Color.prototype.fragSource=function(){return J3D.ShaderSource.Normal2ColorFragment};
J3D.Normal2Color.prototype.setupLocations=function(a){a.vertAttr=gl.getAttribLocation(a,"aVertexPosition");gl.enableVertexAttribArray(a.vertAttr);a.normAttr=gl.getAttribLocation(a,"aVertexNormal");gl.enableVertexAttribArray(a.normAttr);a.projMat=gl.getUniformLocation(a,"projMat");a.mvMat=gl.getUniformLocation(a,"uMVMatrix");a.nMat=gl.getUniformLocation(a,"uNMatrix")};
J3D.Normal2Color.prototype.setup=function(a,b){gl.bindBuffer(gl.ARRAY_BUFFER,a.vertBuf);gl.vertexAttribPointer(b.vertAttr,a.vertSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,a.normBuf);gl.vertexAttribPointer(b.normAttr,a.vertSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,a.triBuf)};J3D.Phong=function(){this.name="Phong";this.color=J3D.Color.white;this.specularIntensity=0;this.shininess=32};J3D.Phong.prototype.vertSource=function(){return J3D.ShaderSource.PhongVertex};J3D.Phong.prototype.fragSource=function(){return J3D.ShaderSource.PhongFragment};
J3D.Phong.prototype.setupLocations=function(a){a.vertAttr=gl.getAttribLocation(a,"aVertexPosition");gl.enableVertexAttribArray(a.vertAttr);a.normAttr=gl.getAttribLocation(a,"aVertexNormal");gl.enableVertexAttribArray(a.normAttr);a.uv1Attr=gl.getAttribLocation(a,"aTextureCoord");gl.enableVertexAttribArray(a.uv1Attr);a.projMat=gl.getUniformLocation(a,"projMat");a.mvMat=gl.getUniformLocation(a,"uMVMatrix");a.nMat=gl.getUniformLocation(a,"uNMatrix");a.uAmbientColor=gl.getUniformLocation(a,"uAmbientColor");
a.uLight=[];for(var b=0;b<J3D.SHADER_MAX_LIGHTS;b++)a.uLight[b]={},a.uLight[b].type=gl.getUniformLocation(a,"uLight["+b+"].type"),a.uLight[b].direction=gl.getUniformLocation(a,"uLight["+b+"].direction"),a.uLight[b].position=gl.getUniformLocation(a,"uLight["+b+"].position"),a.uLight[b].color=gl.getUniformLocation(a,"uLight["+b+"].color");a.uSpecularIntensity=gl.getUniformLocation(a,"uSpecularIntensity");a.uShininess=gl.getUniformLocation(a,"uShininess");a.uColorSampler=gl.getUniformLocation(a,"uColorSampler");
a.uColor=gl.getUniformLocation(a,"uColor");a.uHasColorSampler=gl.getUniformLocation(a,"uHasColorSampler")};
J3D.Phong.prototype.setup=function(a,b,c,d){gl.bindBuffer(gl.ARRAY_BUFFER,a.vertBuf);gl.vertexAttribPointer(b.vertAttr,a.vertSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,a.normBuf);gl.vertexAttribPointer(b.normAttr,a.vertSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,a.uv1buf);gl.vertexAttribPointer(b.uv1Attr,a.uvSize,gl.FLOAT,!1,0,0);a.hasUV1&&this.colorTexture!=null?(gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,this.colorTexture.tex),gl.uniform1i(b.samplerUniform,0),gl.uniform1i(b.uHasColorSampler,
!0)):(gl.bindTexture(gl.TEXTURE_2D,null),gl.uniform1i(b.uHasColorSampler,!1));gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,a.triBuf);gl.uniform4fv(b.uColor,this.color.rgba());gl.uniform3fv(b.uAmbientColor,d.rgb());for(a=0;a<J3D.SHADER_MAX_LIGHTS;a++)c[a]?(gl.uniform1i(b.uLight[a].type,c[a].light.type),gl.uniform3fv(b.uLight[a].direction,c[a].light.direction.xyz()),gl.uniform3fv(b.uLight[a].color,c[a].light.color.rgb()),gl.uniform3fv(b.uLight[a].position,c[a].worldPosition.xyz())):gl.uniform1i(b.uLight[a].type,
J3D.NONE);gl.uniform1f(b.uSpecularIntensity,this.specularIntensity);gl.uniform1f(b.uShininess,this.shininess)};J3D.Gouraud=function(){this.name="Gouraud";this.color=J3D.Color.white;this.specularIntensity=0;this.shininess=32};J3D.Gouraud.prototype.vertSource=function(){return J3D.ShaderSource.GouraudVertex};J3D.Gouraud.prototype.fragSource=function(){return J3D.ShaderSource.GouraudFragment};
J3D.Gouraud.prototype.setupLocations=function(a){a.vertAttr=gl.getAttribLocation(a,"aVertexPosition");gl.enableVertexAttribArray(a.vertAttr);a.normAttr=gl.getAttribLocation(a,"aVertexNormal");gl.enableVertexAttribArray(a.normAttr);a.uv1Attr=gl.getAttribLocation(a,"aTextureCoord");gl.enableVertexAttribArray(a.uv1Attr);a.projMat=gl.getUniformLocation(a,"projMat");a.mvMat=gl.getUniformLocation(a,"uMVMatrix");a.nMat=gl.getUniformLocation(a,"uNMatrix");a.uAmbientColor=gl.getUniformLocation(a,"uAmbientColor");
a.uLight=[];for(var b=0;b<J3D.SHADER_MAX_LIGHTS;b++)a.uLight[b]={},a.uLight[b].type=gl.getUniformLocation(a,"uLight["+b+"].type"),a.uLight[b].direction=gl.getUniformLocation(a,"uLight["+b+"].direction"),a.uLight[b].position=gl.getUniformLocation(a,"uLight["+b+"].position"),a.uLight[b].color=gl.getUniformLocation(a,"uLight["+b+"].color");a.uSpecularIntensity=gl.getUniformLocation(a,"uSpecularIntensity");a.uShininess=gl.getUniformLocation(a,"uShininess");a.uColorSampler=gl.getUniformLocation(a,"uColorSampler");
a.uColor=gl.getUniformLocation(a,"uColor");a.uHasColorSampler=gl.getUniformLocation(a,"uHasColorSampler")};
J3D.Gouraud.prototype.setup=function(a,b,c,d){gl.bindBuffer(gl.ARRAY_BUFFER,a.vertBuf);gl.vertexAttribPointer(b.vertAttr,a.vertSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,a.normBuf);gl.vertexAttribPointer(b.normAttr,a.vertSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,a.uv1buf);gl.vertexAttribPointer(b.uv1Attr,a.uvSize,gl.FLOAT,!1,0,0);a.hasUV1?this.colorTexture!=null?(gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,this.colorTexture.tex),gl.uniform1i(b.samplerUniform,0),gl.uniform1i(b.uHasColorSampler,
!0)):(gl.bindTexture(gl.TEXTURE_2D,null),gl.uniform1i(b.uHasColorSampler,!1)):(gl.bindTexture(gl.TEXTURE_2D,null),gl.uniform1i(b.uHasColorSampler,!1));gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,a.triBuf);gl.uniform4fv(b.uColor,this.color.rgba());gl.uniform3fv(b.uAmbientColor,d.rgb());for(a=0;a<J3D.SHADER_MAX_LIGHTS;a++)c[a]?(gl.uniform1i(b.uLight[a].type,c[a].light.type),gl.uniform3fv(b.uLight[a].direction,c[a].light.direction.xyz()),gl.uniform3fv(b.uLight[a].color,c[a].light.color.rgb()),gl.uniform3fv(b.uLight[a].position,
c[a].worldPosition.xyz())):gl.uniform1i(b.uLight[a].type,J3D.NONE);gl.uniform1f(b.uSpecularIntensity,this.specularIntensity);gl.uniform1f(b.uShininess,this.shininess)};J3D.ShaderSource={};J3D.ShaderSource.CommonInclude="#ifdef GL_ES\nprecision highp float;\n#endif\nstruct lightSource {\nint type;\nvec3 direction;\nvec3 color;\nvec3 position;\n};\nuniform lightSource uLight[4];\nfloat luminance(vec3 c) {\nreturn c.r * 0.299 + c.g * 0.587 + c.b * 0.114;\n}\nfloat brightness(vec3 c) {\nreturn c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722;\n}\nvec3 computeLight(vec4 p, vec3 n, float si, float sh, lightSource light){\nvec3 ld;\nif(light.type == 0) return vec3(0);\nelse if(light.type == 1) ld = light.direction;\nelse if(light.type == 2) ld = normalize(light.position - p.xyz);\nfloat dif = max(dot(n, ld), 0.0);\nfloat spec = 0.0;\nif(si > 0.0) {\nvec3 eyed = normalize(-p.xyz);\nvec3 refd = reflect(-ld, n);\nspec = pow(max(dot(refd, eyed), 0.0), sh) * si;\n};\nreturn light.color * dif + light.color * spec;\n}\nvec3 computeLights(vec4 p, vec3 n, float si, float sh) {\nvec3 s = computeLight(p, n, si, sh, uLight[0]);\ns += computeLight(p, n, si, sh, uLight[1]);\ns += computeLight(p, n, si, sh, uLight[2]);\ns += computeLight(p, n, si, sh, uLight[3]);\nreturn s;\n}\n";
J3D.ShaderSource.GouraudVertex="uniform vec3 uAmbientColor;\nuniform float uSpecularIntensity;\nuniform float uShininess;\nvarying vec3 vLight;\nvarying vec2 vTextureCoord;\nvoid main(void) {\nvec4 p = uMVMatrix * vec4(aVertexPosition, 1.0);\ngl_Position = projMat * p;\nvTextureCoord = aTextureCoord;\nvec3 n = normalize( uNMatrix * aVertexNormal );\nvLight = uAmbientColor + computeLights(p, n, uSpecularIntensity, uShininess);\n}\n";J3D.ShaderSource.GouraudFragment="uniform vec4 uColor;\nuniform sampler2D uColorSampler;\nuniform bool uHasColorSampler;\nvarying vec3 vLight;\nvarying vec2 vTextureCoord;\nvoid main(void) {\nvec4 tc = uColor.rgba;\nif(uHasColorSampler) tc *= texture2D(uColorSampler, vTextureCoord);\ngl_FragColor = vec4(tc.rgb * vLight, uColor.a);\n}\n";
J3D.ShaderSource.Normal2ColorVertex="varying vec3 vColor;\nvoid main(void) {\ngl_Position = projMat *  uMVMatrix * vec4(aVertexPosition, 1.0);\nvColor = normalize( uNMatrix * aVertexNormal );\n}\n";J3D.ShaderSource.Normal2ColorFragment="varying vec3 vColor;\nvoid main(void) {\ngl_FragColor = vec4(vColor, 1.0);\n}\n";J3D.ShaderSource.PhongVertex="varying vec4 vPosition;\nvarying vec3 vLight;\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvoid main(void) {\nvTextureCoord = aTextureCoord;\nvNormal = uNMatrix * aVertexNormal;\nvPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\ngl_Position = projMat * vPosition;\n}\n";
J3D.ShaderSource.PhongFragment="uniform vec4 uColor;\nuniform sampler2D uColorSampler;\nuniform bool uHasColorSampler;\nuniform vec3 uAmbientColor;\nuniform float uSpecularIntensity;\nuniform float uShininess;\nvarying vec4 vPosition;\nvarying vec3 vLight;\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvoid main(void) {\nvec4 tc = uColor.rgba;\nif(uHasColorSampler) tc *= texture2D(uColorSampler, vTextureCoord);\nfloat lum = brightness(tc.rgb);\nvec3 l = uAmbientColor + computeLights(vPosition, vNormal, uSpecularIntensity, uShininess) * lum;\ngl_FragColor = vec4(tc.rgb * l, uColor.a);\n}\n";
J3D.ShaderSource.VertexInclude="attribute vec3 aVertexPosition;\nattribute vec3 aVertexNormal;\nattribute vec2 aTextureCoord;\nuniform mat4 uMVMatrix;\nuniform mat4 projMat;\nuniform mat3 uNMatrix;\n";J3D.Color=function(a,b,c,d){var f=this;this.r=a||0;this.g=b||0;this.b=c||0;this.a=d||0;this.rgba=function(){return[f.r,f.g,f.b,f.a]};this.rgb=function(){return[f.r,f.g,f.b]}};J3D.Color.white=new J3D.Color(1,1,1,1);J3D.Color.black=new J3D.Color(0,0,0,1);J3D.Time={};J3D.Time.time=0;J3D.Time.deltaTime=0;J3D.Time.tick=function(){var a=(new Date).getTime();if(J3D.Time.time!=0)J3D.Time.deltaTime=a-J3D.Time.time;J3D.Time.time=a};if(!window.requestAnimationFrame)window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();
