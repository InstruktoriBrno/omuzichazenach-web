$(document).ready(function() {
//
//	$('#houseNavigation a[womentitle]').each(function() {
//    $(this).simpletip({
//        content : $(this).attr('womentitle'),
//		position: [200, 200]
//    });
//});
//	
//	$('a').each(function() {
//    $(this).simpletip({
//        content : $(this).attr('tooltip'),
//    });
//
//
//   // Configuration properties
//
//});
              
	//ascensor
	
	$('.slide-out-div').tabSlideOut({
    tabHandle: '.handle',                              //class of the element that will be your tab
    pathToTabImage: 'contact_tab.gif',          //path to the image for the tab *required*
    imageHeight: '122px',                               //height of tab image *required*
    imageWidth: '40px',                               //width of tab image *required*    
    tabLocation: 'left',                               //side of screen where tab lives, top, right, bottom, or left
    speed: 300,                                        //speed of animation
    action: 'click',                                   //options: 'click' or 'hover', action to trigger animation
    topPos: '90px',                                   //position from the top
    fixedPosition: true                               //options: true makes it stick(fixed position) on scroll
});

$('#content').ascensor({
	AscensorName:'house',
	WindowsFocus:true,
	WindowsOn:0,
	
	NavigationDirection:'xy',
	Direction: 'y',
	Navig:true,
	Link:false,
	ReturnURL:false,
	PrevNext:false,
	CSSstyles:false,
	
	KeyArrow:true,
	keySwitch:false,
	ReturnCode:false,
	
	ChocolateAscensor:true,
	AscensorMap: '5|3',
	ContentCoord: '1|2 & 2|2 & 3|2 & 4|2 & 5|2 & 1|1 & 2|1 & 3|1 & 1|3 & 2|3 & 3|3'
});

});