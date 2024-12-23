import logo from '../img/logo.png'
function Header() {


    return (
        <header>
        <div class="topHead">
            <div class="logo"><img src={logo} alt="Lampung Gardening Logo"  /></div>
            <div class="searchCart">
                <form action="">
                    <input type="text" placeholder="Search Plants..."  />
                    <button class="search">
                        {/* <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119.828px" height="122.88px" viewBox="0 0 119.828 122.88" enable-background="new 0 0 119.828 122.88" xml:space="preserve"><g><path d="M48.319,0C61.662,0,73.74,5.408,82.484,14.152c8.744,8.744,14.152,20.823,14.152,34.166 c0,12.809-4.984,24.451-13.117,33.098c0.148,0.109,0.291,0.23,0.426,0.364l34.785,34.737c1.457,1.449,1.465,3.807,0.014,5.265 c-1.449,1.458-3.807,1.464-5.264,0.015L78.695,87.06c-0.221-0.22-0.408-0.46-0.563-0.715c-8.213,6.447-18.564,10.292-29.814,10.292 c-13.343,0-25.423-5.408-34.167-14.152C5.408,73.741,0,61.661,0,48.318s5.408-25.422,14.152-34.166C22.896,5.409,34.976,0,48.319,0 L48.319,0z M77.082,19.555c-7.361-7.361-17.53-11.914-28.763-11.914c-11.233,0-21.403,4.553-28.764,11.914 C12.194,26.916,7.641,37.085,7.641,48.318c0,11.233,4.553,21.403,11.914,28.764c7.36,7.361,17.53,11.914,28.764,11.914 c11.233,0,21.402-4.553,28.763-11.914c7.361-7.36,11.914-17.53,11.914-28.764C88.996,37.085,84.443,26.916,77.082,19.555 L77.082,19.555z"/></g></svg> */}
                    </button>
                </form>
                <a href="" class="cartButton">
                    {/* <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.43 122.88" style="enable-background:new 0 0 122.43 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.23c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.24,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.55,103.92,92.79,103.92L92.79,103.92z M30.8,43.07H45.9l-5.48-22.91c-5.4,0-10.72-0.01-15.93-0.01l1.84,6.86 L26.39,27L30.8,43.07L30.8,43.07L30.8,43.07z M48.31,20.17l5.48,22.9h14.54l-5.5-22.88L48.31,20.17L48.31,20.17L48.31,20.17z M70.74,20.2l5.5,22.87h13.91l-5.48-22.85L70.74,20.2L70.74,20.2L70.74,20.2z M92.58,20.23l5.48,22.85l13.92,0l1.54-18.36 c0.43-5.12,1.33-4.47-3.63-4.47C104.23,20.24,98.44,20.23,92.58,20.23L92.58,20.23L92.58,20.23z M111.49,48.89H99.45l3.97,16.56 l0.98-0.13c6.07-0.87,5.67,0.52,6.15-5.21L111.49,48.89L111.49,48.89z M95.77,66.5l-4.22-17.61h-13.9l4.67,19.44L95.77,66.5 L95.77,66.5L95.77,66.5z M74.66,69.37l-4.93-20.49l-14.55,0l5.37,22.41L74.66,69.37L74.66,69.37L74.66,69.37z M52.9,72.34 l-5.61-23.45H32.4l6.96,25.3L52.9,72.34L52.9,72.34z"/></g></svg> */}
                </a>
            </div>
        </div>
        <nav>
            <div class="mainNav">                                
                <a href="#">Home</a>
                <a href="#">Plant</a>
                <a href="#">Plant Collection</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div class="profileDrop">
                <span>Hi,Amalia</span>
                <div class="dropDown">
                    <a href="">Account</a>
                    <a href="">Setting</a>
                    <a href="">Log Out</a>
                </div>
            </div>
        </nav>
    </header>
    )
        
        
    
    }


export default Header