
customElements.define('app-home', class extends HTMLElement {

  constructor() {
    super();
    console.log("app-home called!");
  }
  async connectedCallback() {
    this.innerHTML = `
    <ion-header>
    <ion-toolbar color='primary'>
      <ion-title>Ionic JavaScript Starter </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content padding>
  
    <p>This is home!</p>
    
    <ion-nav-push id="navPush" component="app-about">
    <ion-button class="next">Go to About</ion-button>
  </ion-nav-push>
  
  </ion-content>  
  `;
  /*const backButton = this.querySelector('#backBtn');
  backButton.addEventListener('click', async () => {
    await this.closest('ion-nav').pop();
  });*/

  const navPush = this.querySelector('#navPush');
  await navPush.componentOnReady();
  navPush.component =  "app-about";
  }


});

customElements.define('app-about', class extends HTMLElement {

  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot="start">
            <ion-back-button text="Home"></ion-back-button>
          </ion-buttons>
          <ion-title>Ionic JavaScript Starter</ion-title>
        </ion-toolbar>
        </ion-header>

      <ion-content padding>
        <p>
          Welcome to the Ionic JavaScript Starter.
          You can use this starter to build Mobile/PWA applications with
          web components using JavaScript and ionic/core! 
        </p>
        <ion-nav-pop>
        <ion-button id="backBtn">Go Back</ion-button>
        </ion-nav-pop>  

      </ion-content>   
    `;
    
    
  }  

});


customElements.define('app-tabs',class TabsPage extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <ion-tabs>
        <ion-tab label='Home' icon='home'>
          <ion-nav class="tab-one-nav"></ion-nav>
        </ion-tab>
        <ion-tab label='About' icon='map'>
          <ion-nav class="tab-two-nav"></ion-nav>
        </ion-tab>
        <ion-tab label='Contact' icon='contact'>
        <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Ionic JavaScript Starter</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-content padding>
        <p>
          Hello! I'm the first tab!
        </p>
        <ion-nav-push component="app-about">
          <ion-button>Go to About</ion-button>
        </ion-nav-push>

    </ion-content>           
        </ion-tab>
      </ion-tabs>
    `;
    const navOne = this.querySelector('.tab-one-nav');
    await navOne.componentOnReady();
    await navOne.setRoot('app-home');
    const navTwo = this.querySelector('.tab-two-nav');
    await navTwo.componentOnReady();
    await navTwo.setRoot('app-about');

  }
});


async function init() {
  const nav = document.querySelector('ion-nav');
  await nav.componentOnReady();
  nav.root = 'app-tabs';
}



document.body.innerHTML = `
      <ion-app> 
        <ion-nav></ion-nav>
      </ion-app>
`;

document.body.onload = init();


/*var printToConsoleBtn = document.querySelector("#printToConsole");

printToConsoleBtn.addEventListener('click',(e)=>{
  console.log("Button clicked!");
});
*/

