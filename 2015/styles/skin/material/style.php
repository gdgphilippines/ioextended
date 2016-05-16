<?php
header("Content-type: text/css"); 
?>
body {
	margin: 0px;
	padding: 0px;
	background-color: #f5f5f5;
	font-family: 'Roboto';
	font-size: 16px;
}
a {
	text-decoration: none;
}
#main_cover {
	width: 100%;
	height: 100px;
	min-width: 960px;
	min-height: 600px;
	/*background-image: url(../../../images/skin/material/bg/cover.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;*/
	background-color: #00BCD4;
	position: relative;
}
#main_cover>.wrapper {
	width: 100%;
	height: 100%;
	display: block;
	position: relative;
	margin: 0px auto;
}
#main_cover>.wrapper .logo {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	width: 556px;
	height: 100px;
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -278px;
	margin-top: -50px;
}
#main_cover>.wrapper .gdglogo {
	background-image: url(../../../images/skin/material/logo/gdg.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center right;
	display: block;
	position: absolute;
	bottom: 30px;
	right: 40px;
	color: rgba(0,0,0,.7);
	font-size: 12px;
	width: 236px;
	height: 40px;
}
#main_cover>.wrapper .navigation {
	position: absolute;
	top: 30px;
	right: 25px;
}
#main_cover>.wrapper .navigation>ul {
	margin: 0px;
	padding: 0px;
	list-style-type: none;
	overflow: visible;
}
#main_cover>.wrapper .navigation>ul>li {
	padding: 0px;
	margin: 0px;
	float: left;
	position: relative;
}
#main_cover>.wrapper .navigation>ul>li>a:not(.reg) {
	color: #222;
	font-size: 14px;
	font-weight: 500;
	padding: 20px;
	float: left;
	cursor: pointer;
	text-transform: uppercase;
	position: relative;
	border-bottom: 3px solid transparent;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#main_cover>.wrapper .navigation>ul>li>a:not(.reg):hover {
	color: white;
	border-bottom: 3px solid white;
}
#main_cover>.wrapper .navigation>ul>li>a.reg {
	font-size: 14px;
	cursor: pointer;
	font-weight: 500;
	padding: 20px;
	float: left;
	text-transform: uppercase;
	border-bottom: 3px solid transparent;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
	margin-left: 20px;
	border-radius: 5px;
	position: relative;
	top: 0px;
	background-color: #dcdcdc;
	color: #777;
	box-shadow: 0px 0px 0px transparent;
}
#main_cover>.wrapper .navigation>ul>li>a[href].reg {
	color: white;
	background: #677ec1;
}
#main_cover>.wrapper .navigation>ul>li>a[href].reg:hover {
	top: -2px;
	box-shadow: 0px 2px 5px rgba(0,0,0,.2);
}
#main_cover>.wrapper .navigation>ul>li>ul {
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	position: absolute;
	right: 0px;
	top: 58px;
	background: white;
	display: none;
	width: 200px;
	border-radius: 3px;
	box-shadow: 0px 0px 8px rgba(0,0,0,.3);
	overflow: hidden;
}
#main_cover>.wrapper .navigation>ul>li:hover>ul {
	display: block;
}
#main_cover>.wrapper .navigation>ul>li>ul>li {
	margin: 0px;
	padding: 0px;
	float: left;
	display: block;
	width: 100%;
}
#main_cover>.wrapper .navigation>ul>li>ul>li>a {
	display: block;
	padding: 18px;
	color: #333;
	font-size: 14px;
	font-weight: 700;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#main_cover>.wrapper .navigation>ul>li>ul>li:hover>a {
	background-color: rgba(0,0,0,.1);
}
#main_cover .top-border {
	background: #444;
	width: 100%;
	height: 8px;
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
}
#main_cover .top-border div {
	width: 8%;
	height: 100%;
	float: right;
}
#main_cover .top-border .red {
	background: #cc423c;
}
#main_cover .top-border .blue {
	background: #677ec1;
}
#main_cover .top-border .yellow {
	background: #f1c953;
}
#main_cover .top-border .green {
	background: #479a4e;
}

#container {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	width: 100%;
	min-width: 960px;
	position: relative;
	padding-bottom: 100px;
	overflow: hidden;
}
.container-photos {
	padding: 0px !important;
}
#container>.wrapper {
	width: 960px;
	margin: 0px auto;
	position: relative;
}
#container .bg-con {
	width: 100%;
	height: 300px;
	position: absolute;
	top: 0px;
	left: 0px;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}
#container .full-cover {
	height: 100%;
}
#super #container:nth-child(7n+1) .bg-con {
	background-color: #00838F;
}
#super #container:nth-child(7n+2) .bg-con {
	background-color: #0277BD;
}
#super #container:nth-child(7n+3) .bg-con {
	background-color: #558B2F;
}
#super #container:nth-child(7n+4) .bg-con {
	background-color: #F57C00;
}
#super #container:nth-child(7n+5) .bg-con {
	background-color: #009688;
}
#super #container:nth-child(7n+6) .bg-con {
	background-color: #EF5350;
}
#super #container:nth-child(7n+7) .bg-con {
	background-color: #FBC02D;
}
#container h2 {
	color: white;
	font-weight: 300;
	font-size: 40px;
	margin: 0px;
	padding: 40px 0px;
	text-shadow: 0px 2px 3px rgba(0,0,0,.7);
	padding-top: 100px;
}
#container h3 {
	margin: 0px;
	padding: 0px;
}
#container .content {
	width: 100%;
	background: white;
	border-radius: 5px;
	box-sizing: border-box;
	line-height: 200%;
	box-shadow: 0px 3px 8px rgba(0,0,0,.3);
}
#container .content>.wrapper {
	padding: 30px;
	overflow: hidden;
	position: relative;
	word-wrap: break-word;
}
#container .content:not(:last-child) {
	margin-bottom: 50px;
}
#container .content .button-placer {
	box-sizing: border-box;
	padding: 20px;
	width: 100%;
	text-align: right;
}
#container .content .button-placer a {
	padding: 14px;
	cursor: pointer;
	border-radius: 2px;
	font-weight: 500;
	font-size: 14px;
	text-transform: uppercase;
	margin-left: 20px;
	position: relative;
	top: 0px;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#container .content .button-placer .float {
	background-color: rgba(0,0,0,.26);
	color: #666;
	box-shadow: 0px 2px 5px rgba(0,0,0,.3);
}
#container .content .button-placer .flat {
	background-color: transparent;
	color: #888;
}
#container .content .button-placer a[href].float {
	background-color: #00838F;
	color: #f4f4f4;
	box-shadow: 0px 2px 5px rgba(0,0,0,.3);
}
#container .content .button-placer a[href].float:hover {
	top: -2px;
	box-shadow: 0px 4px 6px rgba(0,0,0,.3);
}
#container .content .button-placer a[href].flat {
	background-color: transparent;
	color: #00838F;
}
#container .marker {
	width: 24px;
	height: 24px;
	border-radius: 100px;
	background-image: url(../../../images/skin/material/bg/marker.png);
	background-position: center center;
	background-repeat: no-repeat;
	background-color: #F44336;
	padding: 10px;
	display: inline-block;
	vertical-align: middle;
	margin-right: 15px;
}
table.sched tr td:nth-child(2) {
	color: #777;
	font-size: 14px;
}
img.loading {
	width: 24px;
	margin-top: 10px;
}
.speaker {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #00BCD4;
	display: inline-block;
	vertical-align: middle;
	margin-left: 15px;
	background-repeat: no-repeat;
	background-size: cover;
	background:position: center center;
	position: relative;
}
.speaker .tip {
	position: absolute;
	top: -1px;
	left: 44px;
	float: left;
	color: white;
	background-color: #00BCD4;
	white-space: nowrap;
	height: 36px;
	font-size: 14px;
	font-weight: 700;
	padding: 0px 10px;
	padding-top: 5px;
	text-transform: uppercase;
	display: none;
	z-index: 50;
}
.speaker:hover .tip {
	display: block;
}
.speaker_list {
	width: 100%;
	position: relative;
	box-sizing: border-box;
	padding: 0px;
	display: table-row;
}
.speaker_list .speaker_photo {
	width: 120px;
	display: table-cell;
	vertical-align: top;
	padding-bottom: 50px;
}
.speaker_list .speaker_photo div {
	background-color: #00BCD4;
	background-repeat: no-repeat;
	background-size: cover;
	background: position: center center;
	position: relative;
	border-radius: 50%;
	width: 120px;
	height: 120px;
}
.speaker_list .speaker_info {
	display: table-cell;
	padding-left: 20px;
	padding-bottom: 50px;
	vertical-align: top;
}
.speaker_list .title {	
	font-weight: 500;
	font-size: 1.2em;
	display: block;
}
.speaker_list a {
	position: relative;
	top: -150px;
	left: 0px;
}
.speaker_list p {
	font-size: 14px;
	line-height: 170%;
	font-weight: 300;
}
.speaker_list .info {
	float: left;
	background: green;
}
.sponsors {
	text-align: center;
}
.sponsors img {
	margin: 50px;
	vertical-align: middle;
}
.container-photos .photo_container {
	position: relative;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	width: 100%;
	height: 500px;
	background: #222;
	cursor: move;
}
.container-photos .photo_container::-webkit-scrollbar {
	width: 0px;
}
.container-photos .photo_container img {
	max-height: 450px;
	margin: 24px 12px;
	display: inline-block;
	vertical-align: middle;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
.container-photos .photo_container img:first-child {
	margin-left: 24px;
}
.container-photos .photo_container img:last-child {
	margin-right: 24px;
}
#gotop {
	background: url(../../../images/skin/material/bg/top.png) no-repeat center center #F44336;
	width: 60px;
	height: 60px;
	display: block;
	position: fixed;
	bottom: -70px;
	right: 50px;
	border-radius: 100px;
	box-shadow: 0px 2px 10px rgba(0,0,0,.4);
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#gonext {
	background: url(../../../images/skin/material/bg/down.png) no-repeat center center #F44336;
	width: 60px;
	height: 60px;
	display: block;
	position: absolute;
	bottom: 40px;
	left: 50%;
	margin-left: -30px;
	border-radius: 100px;
	box-shadow: 0px 2px 10px rgba(0,0,0,.4);
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#goback {
	position: absolute;
	top: 37px;
	left: 30px;
	padding: 10px;
	color: white;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 18px;
	-webkit-transition: all .6s ease-in-out;
	-moz-transition: all .6s ease-in-out;
	-ms-transition: all .6s ease-in-out;
	-o-transition: all .6s ease-in-out;
	transition: all .6s ease-in-out;
}
#goback img {
	vertical-align: middle;
	margin-right: 15px;
	margin-bottom: 3px;
	-webkit-transition: all .6s ease-in-out;
	-moz-transition: all .6s ease-in-out;
	-ms-transition: all .6s ease-in-out;
	-o-transition: all .6s ease-in-out;
	transition: all .6s ease-in-out;
}
#goback:hover {
	left: 25px;
}
#goback:hover img {
	-webkit-transform: rotate(360deg);
	-moz-: rotate(360deg);
	-ms-transform: rotate(360deg);
	-o-transform: rotate(360deg);
	transform: rotate(360deg);
}
#float_top {
	background: url(../../../images/skin/material/bg/float_top.png) repeat-x;
	width: 100%;
	min-width: 960px;
	height: 164px;
	position: fixed;
	top: -164px;
	left: 0px;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#float_top>.wrapper	{
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0px auto;
}
#float_top>.wrapper .logo {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	width: 278px;
	height: 50px;
	display: block;
	position: absolute;
	top: 20px;
	left: 50px;
}
#float_top>.wrapper .navigation {
	position: absolute;
	top: 10px;
	right: 25px;
}
#float_top>.wrapper .navigation>ul {
	margin: 0px;
	padding: 0px;
	list-style-type: none;
}
#float_top>.wrapper .navigation>ul>li {
	padding: 0px;
	margin: 0px;
	float: left;
	position: relative;
}
#float_top>.wrapper .navigation>ul>li>a {
	color: #f5f5f5;
	font-size: 14px;
	font-weight: 500;
	padding: 20px;
	float: left;
	text-transform: uppercase;
	text-shadow: 0px 2px 2px rgba(0,0,0,.5);
	border-bottom: 3px solid transparent;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#float_top>.wrapper .navigation>ul>li>a:hover {
	color: #00BCD4;
	border-bottom: 3px solid #00BCD4;
}
#float_top>.wrapper .navigation>ul>li>ul {
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	position: absolute;
	right: 0px;
	top: 58px;
	background: white;
	display: none;
	width: 200px;
	border-radius: 3px;
	box-shadow: 0px 0px 8px rgba(0,0,0,.6);
	overflow: hidden;
}
#float_top>.wrapper .navigation>ul>li:hover>ul {
	display: block;
}
#float_top>.wrapper .navigation>ul>li>ul>li {
	margin: 0px;
	padding: 0px;
	float: left;
	display: block;
	width: 100%;
}
#float_top>.wrapper .navigation>ul>li>ul>li>a {
	display: block;
	padding: 18px;
	color: #333;
	font-size: 14px;
	font-weight: 700;
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
}
#float_top>.wrapper .navigation>ul>li>ul>li:hover>a {
	background-color: rgba(0,0,0,.1);
}

#footer {
	width: 100%;
	min-width: 960px;
	font-size: 14px;
	font-weight: 300;
	color: #bbb;
	background: #222;
	overflow: hidden;
}
#footer a {
	font-weight: 500;
	color: #005cb9;
}
#footer .logo {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	width: 195px;
	height: 35px;
	display: block;
}
#footer img {
	vertical-align: middle;
}
#footer .col {
	line-height: 150%;
	float: left;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	padding: 40px;
}
#footer .col:last-child {
	text-align: right;
}

<?php
$useragent=$_SERVER['HTTP_USER_AGENT'];
if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))) {
?>
#container>.wrapper {
	width: 900px !important;
}
.wrapper {
	font-size: 7px;
}
table tr td {
	font-size: 20px;
	line-height: 200%;
}
.button-placer a {
	font-size: 7px !important;	
	background: red;
}
.speaker_list .title {
	font-size: 3em;
}
<?php
}
?>