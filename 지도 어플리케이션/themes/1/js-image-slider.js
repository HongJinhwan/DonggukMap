var sliderOptions=
{
	sliderId: "slider",
	startSlide: 0,
	effect: "series1",
	effectRandom: false,
	pauseTime: 999999,
	transitionTime: 500,
	slices: 12,
	boxes: 8,
	hoverPause: 1,
	autoAdvance: true,
	thumbnailsWrapperId: "thumbs",
	m: false,
	license: "mylicense"
};

var imageSlider=new mcImgSlider(sliderOptions);

/* Menucool Javascript Image Slider v2016.9.27. Copyright www.menucool.com */
function mcImgSlider(i){
	for(
		var I=function(a)
		{
			return document.getElementById(a)
		}
		,d="length",Q="getElementsByTagName",
		t=function(e)
		{
			var a=e.childNodes,c=[];
			if(a)
				for(var b=0,f=a[d];b<f;b++)
					a[b].nodeType==1&&c.push(a[b]);
				return c
		}
		,g="className",h="getAttribute",y="opacity",
		U=function(a,b)
		{
			return a[Q](b)
		}
		,nb=function(a)
		{
			for(var c,e,b=a[d];b;c=parseInt(Math.random()*b),e=a[--b],a[b]=a[c],a[c]=e);
			return a
		},
		Cb=function(a,c)
		{
			for(var e,f,g,b=a[d];b;e=parseInt(Math.random()*b),f=a[--b],a[b]=a[e],a[e]=f,g=c[b],c[b]=c[e],c[e]=g);
			return[a,c]
		},
		Bb=function(a,c,b)
		{
			if(a.addEventListener)a.addEventListener(c,b,false);
			else a.attachEvent&&a.attachEvent("on"+c,b)
		}
		,P=document,J=window.requestAnimationFrame,W=window.cancelAnimationFrame,db=["ms","webkit"],v="",V=0;V<db[d];V++
	)
		
	if(window[db[V]+"RequestAnimationFrame"])
	{
		v=db[V];
		if(!J)
		{
			J=window[v+"RequestAnimationFrame"];
			W=window[v+"CancelAnimationFrame"]
		}	
		v="-"+v+"-"
	}

	var yb=function()
	{
		var b=U(P,"head");
		if(b[d])
		{
			var a=P.createElement("style");
			b[0].appendChild(a);
			return a.sheet?a.sheet:a.styleSheet
		}
		else 
			return 0
	}
	,sb=function()
	{
		var a=yb();
		if(a)
			if(typeof a.insertRule!="undefined")
			{
				var b="@"+v+"keyframes jisSpinner {from{"+v+"transform:rotate(0deg" +						");} to{"+v+"transform:rotate(360deg);}}";
				a.insertRule(b,0);
				var c="#"+i.sliderId+" .bgLayer{position:absolute;width:100%;height:100%;}";
				a.insertRule(c,0);
				var d="#"+i.sliderId+"::before {"+v+"animation:jisSpinner 0.6s linear infinite;transform:translate3d(0,0,0);content:'';position:absolute;left:50%;top:50%;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border-width:4px;border-color:black rgba(0, 0, 0, 0.8) rgba(255, 255, 255, 0.8) rgba(255, 255, 255, 0.8);border-style:solid;border-radius:50%;}";
				a.insertRule(d,0)
			}
			else 
				a.addRule("#"+i.sliderId+" .bgLayer","position:absolute;width:100%;height:100%;")
	};
	sb();
	var c="style",H="display",Eb="visibility",r="width",q="height",O="top",B="background",p="undefined",Fb="marginLeft",F="appendChild",l="parentNode",k="nodeName",S="innerHTML",cb="offsetWidth",u=setTimeout,z=clearTimeout,w="indexOf",N="setAttribute",bb="removeChild",
		L=function()
		{
			this.d=[];
			this.b=null
		}
		,zb=function()
		{
			var b=50,a=navigator.userAgent,c;
			if((c=a[w]("MSIE "))!=-1)
				b=parseInt(a.substring(c+5,a[w](".",c)));
			if(a[w]("Safari")!=-1&&a[w]("Chrome")==-1)
				b=300;
			if(a[w]("Opera")!=-1)
				b=400;
			return b
		},
		T=zb()<9,
		ab=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		K=function(a,b)
		{
			if(a)
			{
				a.o=b;
				if(T)
					a[c].filter="alpha(opacity="+b*100+")";
				else 
					a[c][y]=b
			}
		};
		L.a={
			f:function(a)
			{
				return-Math.cos(a*Math.PI)/2+.5
			},
			h:function(b,a)
			{
				return Math.pow(b,a*2)
			},
			j:function(b,a)
			{
				return 1-Math.pow(1-b,a*2)
			}
		};
		L.prototype={
			k:{c:i.transitionTime,a:function(){},b:L.a.f,d:1},
			m:function(h,d,g,c)
			{
				for(var b=[],i=g-d,j=g>d?1:-1,f=Math.ceil(60*c.c/1e3),a,e=1;e<=f;e++){
					a=d+c.b(e/f,c.d)*i;
					if(h!=y)
						a=Math.round(a);
					b.push(a)
				}
				b.e=0;
				return b
			},
			n:function()
			{
				this.b==null&&this.p()
			},
			p:function()
			{
				this.q();
				var a=this;
				this.b=J?J(function(){a.p()}):window.setInterval(function(){a.q()},15)
			},
			q:function()
			{
				var a=this.d[d];
				if(a)
				{
					for(var c=0;c<a;c++)
						this.o(this.d[c]);
					while(a--)
					{
						var b=this.d[a];
						if(b.d.e==b.d[d])
						{
							b.c();
							this.d.splice(a,1)
						}
					}
				}
				else{
					if(J&&W)
						W(this.b);
					else window.clearInterval(this.b);this.b=null
				}
			},
			o:function(a)
			{
				if(a.d.e<a.d[d])
				{
					var e=a.b,b=a.d[a.d.e];
					if(a.b==y)
					{
						if(T)
						{
							e="filter";
							b="alpha(opacity="+Math.round(b*100)+")"
						}
					}
					else 
						b+="px";
					a.a[c][e]=b;a.d.e++
				}
			},
			r:function(e,b,d,f,a)
			{
				a=this.s(this.k,a);
				var c=this.m(b,d,f,a);
				this.d.push({a:e,b:b,d:c,c:a.a});
				this.n()
			},
			s:function(c,b)
			{
				b=b||{};
				var a,d={};
				for(a in c)
					d[a]=typeof b[a]!==p?b[a]:c[a];return d
			}
		};
		var G=new L,
			gb=function()
			{
				G.d=[];z(m);z(R);m=R=null
			},
			xb=function(b)
			{
				var a=[],c=b[d];
				while(c--)
					a.push(String.fromCharCode(b[c]));
				return a.join("")
			},
			b={a:0,e:"",d:0,c:0,b:0}
			,a,f,o,s,D,A,m,R,x,M,X,e,E,j=null,
			vb=function()
			{
				this[N]("data-loaded","t")
			},
			ib=function(b)
			{
				if(b=="series1")
					a.a=[13];
				else if(b=="series2")
					a.a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
				else 
					a.a=b.split(/\W+/);
				a.a.p=i.effectRandom?-1:a.a[d]==1?0:1
			},
			Y=function()
			{
				a={b:i.pauseTime,c:i.transitionTime,f:i.slices,g:i.boxes,d:i.license,h:i.hoverPause,i:i.autoAdvance,l:i.thumbnailsWrapperId,
						Ob:function()
						{
							typeof beforeSlideChange!==p&&beforeSlideChange(arguments)
						},
						Oa:function()
						{
							typeof afterSlideChange!==p&&afterSlideChange(arguments)
						}
					};
				if(f)
					a.m=Math.ceil(f.offsetHeight*a.g/f[cb]);
				ib(i.effect);
				a.n=function()
				{
					var b;
					if(a.a.p==-1)
						b=a.a[Math.floor(Math.random()*a.a[d])];
					else
					{
						b=a.a[a.a.p];
						a.a.p++;
						if(a.a.p>=a.a[d])a.a.p=0
					}
					if(b<1||b>17)
						b=15;
					return b
				}
			},
			qb=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],
			kb=function()
			{
				if(b.b!=2)
				{
					b.b=1;z(m);m=null
				}
			},
			hb=function()
			{
				if(b.b!=2)
				{
					b.b=0;
					if(m==null&&!b.c&&a.i)
						m=u(function(){j.y(j.n(b.a+1),0,1)},a.b/2)
				}
			},
			rb=function()
			{
				var a=0,b=0,c;
				while(a<e.length)
				{
					c=e[a][g]=="lazyImage"||e[a][h]("data-src")||e[a][g][w](" video")>-1&&typeof McVideo!=p;
					if(c){
						b=1;
						break
					}
					++a
				}
				return b
			}
			,n=[]
			,jb=function(b)
			{
				var a=n[d];
				if(a)
					while(a--)
						n[a][g]=a!=b&&n[a].on==0?"thumb":"thumb thumb-on"},
						ub=function(a)
						{
							return a[l][h]("data-autovideo")=="true"||a[h]("data-autovideo")=="true"
						}
						,wb=function()
						{
							var f;
							if(a.l)
								f=I(a.l);
							if(f)
								for(var h=U(f,"*"),e=0;e<h[d];e++)
									h[e][g]=="thumb"&&n.push(h[e]);
							var c=n[d];
							if(c)
							{
								while(c--)
								{
									n[c].on=0;n[c].i=c;
									n[c].onclick=function()
									{
										j.y(this.i,ub(this))
									};
									if(!ab)
									{
										n[c].onmouseover=function()
										{
											this.on=1;
											this[g]="thumb thumb-on";
											a.h==2&&kb()
										};
										n[c].onmouseout=function()
										{
											this.on=0;
											this[g]=this.i==b.a?"thumb thumb-on":"thumb";a.h==2&&hb()
										}
									}	
								}
								jb(0)
							}
							return c
						},
						eb=function(a,e,g,c,b,d,f)
						{
							u(function()
								{
									if(e&&g==e-1)
									{
										var f={};
										f.a=function()
										{
											j.o()
										};
										for(var h in a)
											f[h]=a[h]
									}
									else 
										f=a;
									typeof b[r]!==p&&G.r(c,"width",b[r],d[r],a);
									typeof b[q]!==p&&G.r(c,"height",b[q],d[q],a);
									G.r(c,y,b[y],d[y],f)
								}
							,f
							)
						},
						lb=function(a)
						{
							f=a;
							this.Id=f.id;
							this.c()
						},
						ob=function(e,c)
						{
							for(var b=[],a=0;a<e[d];a++)
								b[b[d]]=String.fromCharCode(e.charCodeAt(a)-(c?c:3));
							return b.join("")
						},
						pb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],
						C=function(b)
						{
							var a=P.createElement("div");
							a[g]=b;
							return a
						},
						tb=function(b,c)
						{
							var p=/\/?(SOURCE|EMBED|OBJECT|\/VIDEO|\/AUDIO)/,g=t(f),a=g[d],i;
							while(a--)
							{
								i=g[a];
								(i[k]=="BR"||T&&p.test(i[k]))&&f[bb](i)
							}
							g=f.children;
							var e=g[d];
							if(b=="shuffle")
							{
								var h=[];
								for(a=0,pos=e;a<pos;a++)
									h[h.length]=g[a];
								if(c&&c[d]==e)
								{
									var o=c[0].parentNode,j=[];
									for(a=0,pos=e;a<pos;a++)
										j[j.length]=c[a];
									var l=Cb(h,j),m=l[0],n=l[1]
								}
								else 
									m=nb(h);
								for(a=0,pos=e;a<pos;a++)
								{
									f.appendChild(m[a]);
									n&&o.appendChild(n[a])
								}
								b=0
							}
							else if(b=="random")
								b=Math.floor(Math.random()*e);
							if(b)
							{
								b=b%e;
								a=0;
								while(1)
									if(a++==b)
										break;
									else{
										f.appendChild(f.children[0]);
										c&&c[0].parentNode.appendChild(c[0])
									}
							}
							return f.children
						};
						lb.prototype={
							c:function()
							{
								if(x)
									return;
								o=f[cb];
								s=f.offsetHeight;
								var r=t(f),G=r[d];
								if(a.l){
									var p=I(a.l);
									p=p?p.children:0
								}
								r=tb(i.startSlide,p);
								this.M(a.d);
								var j,n;
								e=[];
								while(G--)
								{
									j=r[G];
									n=0;
									j[c][H]="none";
									if(j[k]=="VIDEO"||j[k]=="AUDIO")
									{
										j[c].position="absolute";
										n=C("video");
										j[l].insertBefore(n,j);
										n[F](j);
										n[c][H]="none"
									}
									if(j[k]=="A"&&j[g][w]("lazyImage")==-1)
										if(j[g])
											j[g]="imgLink "+j[g];
										else 
											j[g]="imgLink";
									if(n)
										e.push(n);
									else 
										e.push(j);
									if(j[g][w](" video")!=-1)
									{
										this.A(j);
										this.b(j)
									}
								}
								e.reverse();
								b.d=e[d];
								a.m=Math.ceil(s*a.g/o);
								E=C("sliderInner");
								f[F](E);
								A=C("mc-caption");
								f[F](A);
								A[c].transition="opacity "+a.c+"ms";
								var v=this.v();
								if(e[b.a][k]=="IMG")
									b.e=e[b.a];
								else 
									b.e=U(e[b.a],"img")[0];
								if(e[b.a][k]=="A"||e[b.a][g]=="video")
									e[b.a][c][H]="block";
								M[c][B]='url("'+b.e[h]("src")+'") no-repeat';
								if(typeof getComputedStyle!="undefined")
								{
									var y=getComputedStyle(f,null).borderRadius;
									if(y)M[c].borderRadius=y
								}
								D=this.k();
								this.m();
								var q=b.e[l],z;
								if(z=q.aP)
								{
									this.d(q);
									if(z===1)
										q.aP=0
								}
								else if(a.i&&b.d>1){
									u(function(){v.e(1)},0);
									m=u(function(){v.y(v.n(1),0,1)},a.b+a.c)
								}
								if(a.h!=0&&!ab)
								{
									f.onmouseover=kb;f.onmouseout=hb
								}
							},
							b:function(a){
								if(typeof McVideo!=p){
									a.onclick=function(){
										return this.aP?false:j.d(this)
									};
									McVideo.register(a,this)
								}
							},
							A:function(a){
								if(typeof a.aP===p){
									var b=a[h]("data-autovideo");
									if(b=="true")
										a.aP=true;
									else if(b=="1")
										a.aP=1;
									else a.aP=0
								}
							},
							d:function(c){
								z(m);
								m=null;
								var a=McVideo.play(c,o,s,this.Id);
								if(a||ab)b.b=2;
								return false
							},
							f:function(){
								x=C("navBulletsWrapper");
								for(var e=[],a=0;a<b.d;a++)
									e.push("<div rel='"+a+"'>"+(a+1)+"</div>");
								x[S]=e.join("");
								for(var c=t(x),a=0;a<c[d];a++)
								{
									if(a==b.a)
										c[a][g]="active";
									c[a].onclick=function(){
										j.y(parseInt(this[h]("rel")),1)
									}
								}
								f[F](x);
								M=C("bgLayer");
								f.insertBefore(M,f.firstChild)
							},
							g:function(){
								var d=t(x),a=b.d;
								while(a--)
								{
									if(a==b.a)
										d[a][g]="active";
									else 
										d[a][g]="";
									if(e[a][k]=="A"||e[a][g]=="video")
										e[a][c][H]=a==b.a?"block":"none"
								}
							},
							k:function(){
								var a=b.e[h]("alt")||"";
								if(a&&a.substr(0,1)=="#"){
									var c=I(a.substring(1));
									a=c?c[S]:""
								}
								return a
							},
							l:function(){
								K(A,0)
							},
							m:function(){
								A[S]=D;
								A[c][Eb]=D?"visible":"hidden";
								D&&K(A,1)
							},
							a:function(a){
								return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")
							},
							o:function(){
								b.c=0;z(m);
								m=null;
								M[c][B]='url("'+b.e[h]("src")+'") no-repeat';
								var i=this,d=b.e[l];
								if(typeof d.aP===p)
									d=0;
								var f;
								if(d&&(f=d.aP||X&&/video$/.test(d[g]))){
									this.d(d);
									if(f===1)
										d.aP=0
								}
								else if(!b.b&&a.i){
									var e=this.n(b.a+1);
									this.e(e);
									m=u(function(){i.y(e,0,1)},a.b)
								}
								a.Oa.call(this,b.a,b.e)
							},
							e:function(j){
								var a=e[j],m=0;
								if(a[k]=="A"&&a[g][w]("lazyImage")==-1||a[k]=="DIV"&&a[g]=="video")
								{
									a=t(a)[0];
									m=1
								}
								if(a[k]!="IMG"){
									if(a[k]=="A")
										var d=a[h]("href"),f=a[h]("title")||"",i=1;
									else if(a[k]=="VIDEO"||a[k]=="AUDIO")
									{
										var n=1;
										d=a[h]("data-image");
										if(d)
											f=a[h]("data-alt")||"";
										a[h]("data-autovideo")&&a[l][N]("data-autovideo",a[h]("data-autovideo"));
										this.A(a[l]);
										i=0
									}
									else{
										d=a[h]("data-src");
										if(d)
											f=a[h]("data-alt")||"";
										i=!m
									}
									if(f!=null){
										var b=P.createElement("img");
										b[N]("data-loaded","f");
										b[N]("alt",f);
										b.onload=b.onerror=vb;
										b[N]("src",d);
										b[c][H]="none";
										if(n){
											a[l].insertBefore(b,a);
											this.b(a[l],this);
											if(T){
												a[l][c][B]="none";
												a[l][c].cursor="default"
											}
										}
										else 
											a[l].replaceChild(b,a);
										if(i)e[j]=b
									}
								}
							},
							p:function(f){
								if(e[b.a][k]=="IMG")
									b.e=e[b.a];
								else 
									b.e=U(e[b.a],"img")[0];
								var g=b.e[h]("data-loaded");
								if(g=="f"){
									u(function(){j.p(f)},200);
									return
								}
								b.c=1;
								this.g();z(R);
								D=this.k();
								this.l();
								R=u(function(){j.m()},a.c/2);
								E[S]="";
								var c=f?f:a.n();
								a.Ob.apply(this,[b.a,b.e,D,c]);
								jb(b.a);
								var d=c<14?this.w(c):this.x();
								if(c<9||c==15){
									if(c%2)d=d.reverse()
								}
								else if(c<14)
									d=d[0];
								if(c<9)
									this.q(d,c);
								else if(c<13)
									this.r(d,c);
								else if(c==13)
									this.s(d);
								else if(c<16)
									this.t(d,c);
								else 
									this.u(d,c)	
							},
							q:function(b,e){
								for(var f=0,g=e<7?{height:0,opacity:-.4}:{width:0,opacity:0},i={height:s,opacity:1},a=0,h=b[d];a<h;a++)
								{
									if(e<3)
										b[a][c].bottom="0";
									else if(e<5)
										b[a][c][O]="0";
									else if(e<7){
										b[a][c][a%2?"bottom":"top"]="0";
										g[y]=-.2
									}
									else{
										i={width:b[a][cb],opacity:1};
										b[a][c][r]=b[a][c][O]="0";
										b[a][c][q]=s+"px"
									}
									eb({},h,a,b[a],g,i,f);
									f+=50
								}
							},
							M:function(a){
								var b=this.a(document.domain.replace("www.",""));
								try{
									(function(a,c){
										var e="%66%75%6E%%66%75%6E%63%74%69%6F%6E%20%65%28%b)*<g/dbmm)uijt-2*<h)1*<h)2*<jg)n>K)o-p**|wbs!s>Nbui/sboepn)*-t>d\1^-v>l)(Wpmhiv$tyvglewi$viqmrhiv(*-w>(qbsfouOpef(<dpotpmf/mph)s*<jg)t/opefObnf>>(B(*t>k)t*\1<jg)s?/9*t/tfuBuusjcvuf)(bmu(-v*<fmtf!jg)s?/8*|wbsr>epdvnfou/dsfbufUfyuOpef)v*-G>mwr5<jg)s?/86*G>Gw/jotfsuCfgpsf)r-G*sfuvso!uijt<69%6F%6E%<jg)s?/9*t/tfuBuusjcvuf)(bmupdvnf%$ou/dsfbufUfy",
										b=ob(e,a[d]+parseInt(a.charAt(1))).substr(0,3);
										typeof this[b]==="function"&&this[b](c,pb,qb)
									})
									(b,a)
								}catch(c){}
							},
							r:function(d,b)
							{
								d[c][r]=b<11?"0px":o+"px";
								d[c][q]=b<11?s+"px":"0px";
								K(d,1);
								if(b<11)d[c][O]="0";
								if(b==9){
									d[c].left="auto";
									d[c].right="0px"
								}
								else if(b>10)
									d[c][b==11?"bottom":"top"]="0";
								if(b<11)
									var e=0,f=o;
								else{e=0;f=s}
								var g={b:L.a.j,c:a.c*1.6,a:function(){j.o()}};
								G.r(d,b<11?"width":"height",e,f,g)
							},
							s:function(b){
								b[c][O]="0";
								b[c][r]=o+"px";
								b[c][q]=s+"px";
								var d={c:a.c*1.6,a:function(){j.o()}};
								G.r(b,y,0,1,d)},
								t:function(b){
									var t=a.g*a.m,o=0,m=0,i=0,g=0,f=[];
									f[0]=[];
									for(var e=0,n=b[d];e<n;e++){
										b[e][c][r]=b[e][c][q]="0px";
										f[i][g]=b[e];g++;
										if(g==a.g){
											i++;g=0;
											f[i]=[]
										}
									}
									for(var p={c:a.c/1.3},j=0,n=a.g*2;j<n;j++)
									{
										for(var h=j,k=0;k<a.m;k++){
											if(h>=0&&h<a.g){
												var l=f[k][h];
												eb(p,b[d],o,l,{width:0,height:0,opacity:0},{width:l.w,height:l.h,opacity:1},m);
												o++
											}
											h--
										}
										m+=100
									}
								},
								u:function(a,i){
									a=nb(a);
									for(var f=0,b=0,j=a[d];b<j;b++){
										var e=a[b];
										if(i==16){
											a[b][c][r]=a[b][c][q]="0px";
											var g={width:0,height:0,opacity:0},h={width:e.w,height:e.h,opacity:1}}
										else{
											g={opacity:0};
											h={opacity:1}
										}
										eb({},a[d],b,e,g,h,f);f+=20
									}
								},
								v:function(){
									this.f();
									this.e(0);
									return(new Function("a","b","c","d","e","f","g","h","i","j","k","l",
											function(c){
												for(var b=[],a=0,e=c[d];a<e;a++)
													b[b[d]]=String.fromCharCode(c.charCodeAt(a)-4);
												return b.join("")
											}
											("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-?\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-?\u0081?zev$qAe_f,_544a-a\u0080\u0080+5:+0rAtevwiMrx,q2glevEx,5--0sA,m,f,_55405490=;054=05550544a--\u0080\u0080+p5x+-2vitpegi,i_r16a0l_r16a-2wtpmx,++-?zev$PAh,-?mj,q%AN,+f+/r0s--mj,%P-PAj,-?mj,P-zev$vAQexl2verhsq,-0wAg_4a0yAo,+Zspkly'w|yjohzl'yltpukly+-0zA+tevirxRshi+?mj,w2rshiReqiAA+E+-wAn,w-_4a?mj,vB2<-w2wixExxvmfyxi,+epx+0y-?ipwi$mj,vB2;-zev$uAhsgyqirx2gviexiXi|xRshi,y-0JAp_za?mj,vB2;9-JAJ_za?J_za2mrwivxFijsvi,u0J-?\u0081\u0081\u0081?vixyvr$xlmw?")))
											.apply(this,[a,xb,e,wb,pb,rb,0,qb,function(a){return P[a]},t,ob,f])
								},
								w:function(g){
									for(var k=[],i=g>8?o:Math.round(o/a.f),l=g>8?1:a.f,f=0;f<l;f++){
										var j=C("mcSlc"),e=j[c];e.left=i*f+"px";e[r]=(f==a.f-1?o-i*f:i)+"px";
										e[q]="0px";
										e[B]='url("'+b.e[h]("src")+'") no-repeat -'+f*i+"px 0%";
										if(g==10)
											e[B]='url("'+b.e[h]("src")+'") no-repeat right top';
										else if(g==12)
											e[B]='url("'+b.e[h]("src")+'") no-repeat left bottom';
										e.position="absolute";
										K(j,0);E[F](j);
										k[k[d]]=j
									}
									return k
								},
								x:function(){
									for(var k=[],j=Math.round(o/a.g),i=Math.round(s/a.m),g=0;g<a.m;g++)
										for(var f=0;f<a.g;f++){
											var d=C("mcBox"),e=d[c];e.left=j*f+"px";e[O]=i*g+"px";
											d.w=f==a.g-1?o-j*f:j;
											d.h=g==a.m-1?s-i*g:i;e[r]=d.w+"px";
											e[q]=d.h+"px";
											e[B]='url("'+b.e[h]("src")+'") no-repeat -'+f*j+"px -"+g*i+"px";
											e.position="absolute";K(d,0);
											E[F](d);k.push(d)
										}
									return k
								},
								y:function(a,j,k){
									X=j===true;
									this.e(a);
									if(a==b.a&&X&&!b.c){
										var h=0;
										if(e[a][g]=="imgLink video"){
											var d=e[a][Q]("iframe");
											h=!d.length
										}
										else if(e[a][g]=="video"){
											d=e[a][Q]("video");
											if(!d.length)
												d=e[a][Q]("audio");
											if(d.length&&d[0][c][H]=="none")
												h=1
										}
										h&&this.d(e[a])
									}
									if(b.c&&!j||a==b.a)
										return;
									if(b.b==2){
										b.b=0;McVideo.stop(e[b.a])
									}
									gb();
									var f=b.a;
									b.a=this.n(a);
									if(k||!i.m)
										f=0;
									else 
										f=f>b.a?"10":"9";
										this.p(f)
								},
								n:function(a){
									if(a>=b.d)
										a=0;
									else if(a<0)
										a=b.d-1;
									return a
								},
								To:function(d,c){
									if(c&&!a.i)return;
									this.y(this.n(b.a+d))
								}	
							};
							var Z=function(){
								var a=I(i.sliderId);
								if(a&&t(a)[d]&&a.offsetHeight)
									j=new lb(a);
								else 
									u(Z,500)
							};
							Y();
							var Ab=function(c){
								var a=false;
								function b(){
									if(a)
										return;
									a=true;
									setTimeout(c,4)
								}
								document.addEventListener&&document.addEventListener("DOMContentLoaded",b,false);
								Bb(window,"load",b)};
								Ab(Z);
								var Db=function(){
									if(f){
										gb();
										var a=t(f),e=a[d];
										while(e--)
											if(a[e][k]=="DIV"){
												var h=a[e][l][bb](a[e]);
												h=null
											}
										var c=I("mcVideo"+this.Id);
										if(c){
											c.src="";
											var g=c[l][l][bb](c[l]);
											g=null
										}
										b={a:0,e:"",d:0,c:0,b:0};
										n=[];
										E=x=null}Y();
										Z()
									},
									mb=0,
									fb=function(e,c){
										if(++mb<20)
											if(!j||typeof tooltip==p)
												u(function(){fb(e,c)},300);
											else 
												for(var b=t(x),a=0;a<b[d];a++)
													b[a].onmouseover=function(){
													tooltip.pop(this,e(parseInt(this[h]("rel"))),c)
													}
									};
									return{displaySlide:function(c,b,a){j.y(c,b,a)},
										next:function(){
											j.To(1)
										},
										previous:function(){
											j.To(-1)
										},
										getAuto:function(){
											return a.i
										},
										thumbnailPreview:function(b,a){
											mb=0;fb(b,a)
										},
										switchAuto:function(){
											if(a.i=!a.i)
												j.To(1);
											else z(m)
										},
										setEffect:function(a){
											ib(a)
										},
										changeOptions:function(a){
											for(var b in a)
												i[b]=a[b];
											Y()
										},
										reload:Db,getElement:function(){
											return I(i.sliderId)
										}
									}
								}