const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('Terraza Oblatos')
.pauseFor(200)
.start();

videojs.getPlayer("myPlayerID").ready(function() {
    // The following creates the divs and img elements to save the img of skip forward and rewind button
    var myPlayer = this,
      jumpAmount = 5,
      controlBar,
      insertBeforeNode,
      newElementBB = document.createElement("div"),
      newElementFB = document.createElement("div"),
      newImageBB = document.createElement("img"),
      newImageFB = document.createElement("img");
  
    // Assign ID to the elements created for manipulation in the DOM
    newElementBB.id = "backButton";
    newElementFB.id = "forwardButton";
  
    // Assign properties to elements and then assign to parents
    newImageBB.setAttribute(
      "src",
      "https://player.support.brightcove.com/assets/images/code-samples/brightcove-player-sample-back-forward-buttons/back-button.png"
    );
    newElementBB.appendChild(newImageBB);
    newImageFB.setAttribute(
      "src",
      "https://player.support.brightcove.com/assets/images/code-samples/brightcove-player-sample-back-forward-buttons/forward-button.png"
    );
    newElementFB.appendChild(newImageFB);
  
    //Get controlbar and insert elements
    controlBar = myPlayer.$(".vjs-control-bar");
    //Get the element to insert buttons in front of in conrolbar
    insertBeforeNode = myPlayer.$(".vjs-volume-panel");
  
    // Insert the button div in proper location
    controlBar.insertBefore(newElementBB, insertBeforeNode);
    controlBar.insertBefore(newElementFB, insertBeforeNode);
  
    // Add event listenner to rewind or skip forward
    // Rewind button logic, don't jump to negative times
    newElementBB.addEventListener("click", function() {
      var newTime,
        rewindAmt = jumpAmount,
        videoTime = myPlayer.currentTime();
      if (videoTime >= rewindAmt) {
        newTime = videoTime - rewindAmt;
      } else {
        newTime = 0;
      }
      myPlayer.currentTime(newTime);
    });
  
    // Skip Forward button logic, don't jump past the duration
    newElementFB.addEventListener("click", function() {
      var newTime,
        forwardAmt = jumpAmount,
        videoTime = myPlayer.currentTime(),
        videoDuration = myPlayer.duration();
      if (videoTime + forwardAmt <= videoDuration) {
        newTime = videoTime + forwardAmt;
      } else {
        newTime = videoDuration;
      }
      myPlayer.currentTime(newTime);
    });
  });