var cv = document.getElementById('lienzo');
            var ctx = cv.getContext('2d');
            var image = new Image();
            var foto = { x: 50, y: 50, w: 100, h: 100 };
            var isUp = null;
            image.src = 'https://picsum.photos/200/300';

            image.onload = function () {
                drawImage(image, foto.w, foto.h);
            }

            function drawImage(image, w, h) {
                ctx.drawImage(image, foto.x, foto.y, w, h);

                ctx.fillStyle = 'white';

                ctx.beginPath();
                ctx.arc(foto.x, foto.y, 5, 0, Math.PI * 2, 1);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(w + foto.x, h / 2 + foto.y, 5, 0, Math.PI * 2, 1);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(w / 2 + foto.x, h + foto.y, 5, 0, Math.PI * 2, 1);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(w + foto.x, h + foto.y, 5, 0, Math.PI * 2, 1);
                ctx.fill();

                /* ctx.beginPath();
                 ctx.arc( foto.x , h + foto.y , 5, 0, Math.PI * 2, 1);
                 ctx.fill();
         
                 
              
                 ctx.beginPath();
                 ctx.arc(foto.x , h + foto.y , 5, 0, Math.PI * 2, 1);
                 ctx.fill();
                 ctx.beginPath();
                 ctx.arc( w - foto.x, h / 2+ foto.y, 5, 0, Math.PI * 2, 1);
                 ctx.fill(); 
                 
                 ctx.beginPath();
                 ctx.arc(w + foto.x , foto.y , 5, 0, Math.PI * 2, 1);
                 ctx.fill();
                 
                 ctx.beginPath();
                 ctx.arc(w / 2 + foto.x,  + foto.y, 5, 0, Math.PI * 2, 1);
                 ctx.fill();
                 */

            }

            window.onmousedown = function (evt) {
                var ax = evt.clientX - cv.offsetLeft;
                var ay = evt.clientY - cv.offsetTop;

                console.log(ax, ay);

                if (ax >= foto.w - 5 + foto.x
                    && ax <= foto.w + foto.x + 5
                    && ay >= foto.h / 2 + foto.y - 5
                    && ay <= foto.h / 2 + foto.y + 5
                ) {
                    isUp = 'right';
                }

                else if (ax >= foto.w / 2 + foto.x - 5
                    && ax <= foto.w / 2 + foto.x + 5
                    && ay >= foto.h + foto.y - 5
                    && ay <= foto.h + foto.y + 5
                ) {
                    isUp = 'bottom';
                }

                else if (ax >= foto.w + foto.x - 5
                    && ax <= foto.w + foto.x + 5
                    && ay >= foto.h + foto.y - 5
                    && ay <= foto.h + foto.y + 5
                ) {
                    isUp = 'bottom-right';
                }

                else if (ax >= foto.x - 5 && ax <= foto.x + 5
                    && ay >= foto.y - 5 && ay <= foto.y + 5
                ) {
                    isUp = 'top-left';
                }
                else if (
                    ax >= foto.h + 5 + foto.y
                    && ax <= foto.h + foto.y - 5
                    && ay >= foto.w / 2 + foto.x + 5
                    && ay <= foto.w / 2 + foto.x - 5
                ) {
                    isUp = 'left';
                }
            }

            window.onmousemove = function (evt) {
                var ax = evt.clientX - cv.offsetLeft;
                var ay = evt.clientY - cv.offsetTop;

                if (isUp === 'right') {
                    foto.w = ax - foto.x;
                    ctx.clearRect(0, 0, 900, 600);
                    drawImage(image, foto.w, foto.h);
                }

                else if (isUp === 'bottom') {
                    foto.h = ay - foto.y;
                    ctx.clearRect(0, 0, 900, 600);
                    drawImage(image, foto.w, foto.h);
                }

                else if (isUp === 'bottom-right') {
                    foto.w = ax - foto.x;
                    foto.h = ay - foto.y;
                    ctx.clearRect(0, 0, 900, 600);
                    drawImage(image, foto.w, foto.h);
                }

                else if (isUp === 'top-left') {
                    var dx = foto.x - ax;
                    var dy = foto.y - ay;
                    foto.x = ax;
                    foto.y = ay;
                    foto.w += dx;
                    foto.h += dy;
                    ctx.clearRect(0, 0, 900, 600);
                    drawImage(image, foto.w, foto.h);
                }
                else if (isUp === 'left') {
                    foto.w = ay - foto.y;
                    ctx.clearRect(0, 0, 900, 600);
                    drawImage(image, foto.w, foto.h);
                }
            }

            window.onmouseup = function (evt) {
                isUp = null;
            }
