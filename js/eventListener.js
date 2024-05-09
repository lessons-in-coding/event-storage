let grandparent = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

//အဆင့်-၁ Event Bubbling- parameter-နှစ်ခုနဲ့ရေးကြည့်မယ် (event, callback())
//element.addEventListener(event, function, useCapture);
grandparent.addEventListener("click", (e) => {
  console.log(e); //(e.target)
});
//ဒီအဆင့်မှာ console.log(e) လို့ရေးလိုက်ရင် console-မှာကြည့်လိုက်ယင် သူနဲ့ပတ်သက်တဲ့ လုပ်ဆောင်နိုင်တဲ့အချက်တွေတွေ့မယ်၊ ဒါဆိုယင် console.log(e.target)လို့ရေးလိုက်ယင် ကိုယ်Targetလုပ်ထားတဲ့အချက်ကိုပဲ ပြတာပါ။
grandparent.addEventListener("click", (e) => {
  console.log("Grandparent"); //ဒါကလူတိုင်းသိထားတဲ့အခြေခံအချက်ပါ
});
// ဒါဆိုယင် child-ကိုနှိပ်ကြည့်လိုက်ပါ။ ဒါပဲပြန်ထွက်လာလိမ့်မယ်။ ဒါဘာဖြစ်တာလဲ၊ ဒီလိုလုပ်ကြည့်ရအောင်
document.addEventListener("click", (e) => {
  console.log("Document");
});
grandparent.addEventListener("click", (e) => {
  console.log("Grandparent");
});
parent.addEventListener("click", (e) => {
  console.log("Parent");
});
child.addEventListener("click", (e) => {
  console.log("Child");
});
//child-ကိုနှိပ်လိုက်ယင်(၄)ခုပေါ်မယ်၊ parent-ကိုနှိပ်လိုက်ယင်(၃)ခုပေါ်မယ်၊ grandparent-ကိုနှိပ်လိုက်ယင်(၂)ခုပေါ်မယ်၊ document-ကိုနှိပ်လိုက်ယင်(၁)ခုပေါ်မယ်၊ //အဲ့ဒါ bubble(upward)

/*
        //အဆင့်-၂ Event Capture- parameter-သုံးခုလုံးနဲ့ရေးကြည့်မယ် (event, callback(), capture)
        document.addEventListener("click", (e) => {
          console.log("Document");
        }, (capture: true ));

        //ဒီလိုစမ်းကြည့်ရအောင်
        document.addEventListener("click", (e) => {
          console.log("Document capture");
        }, (capture: true ));
        document.addEventListener("click", (e) => {
          console.log("Document bubble");
        });

        grandparent.addEventListener("click", (e) => {
          console.log("Grandparent capture");
        }, (capture: true ));
        grandparent.addEventListener("click", (e) => {
          console.log("Grandparent bubble");
        });

        parent.addEventListener("click", (e) => {
          //e.stopPropergation() //it will stop from here, no more caputer after it and no more bubbling
          console.log("Parent capture");
        }, (capture: true ));
        parent.addEventListener("click", (e) => {
          console.log("Parent bubble");
        });

        child.addEventListener("click", (e) => {
          console.log("Child capture");
        }, (capture: true ));
        child.addEventListener("click", (e) => {
          console.log("Child bubble");
          //e.stopPropergation() //it will print all capture, but no more bubbling after child
        });
*/

/*
        //အဆင့်-၃ once method
        document.addEventListener("click", (e) => {
          console.log("Document");
        });
        grandparent.addEventListener("click", (e) => {
          console.log("Grandparent");
        });
        parent.addEventListener("click", (e) => {
          console.log("Parent");
        }, ( once: true ) //only one time show up, next click, no more parent show up at all);

        child.addEventListener("click", (e) => {
          console.log("Child");
        });
*/

/*
        //အဆင့်-၄ removeEventListner method
        document.addEventListener("click", (e) => {
          console.log("Document");
        });
        grandparent.addEventListener("click", (e) => {
          console.log("Grandparent");
        });

        // //Regular way
        // parent.addEventListener("click", (e) => {
        //   console.log("Hi, Yangon!");
        // });
        // ဒီလို regular way နဲ့ရေးလိုက်ယင် removeEventListener က အလုပ်မလုပ်တော့ဘူး၊ ဘာဖြစ်လို့လဲဆိုတော့ event-အသစ်တစ်ခုကို remove မှာ ထပ်ရေးထားလို့ပါပဲ
        parent.addEventListener("click", sayHi);
        setTimeout(() => {
          parent.removeEventListener("click", sayHi)
        }, 2000)

        child.addEventListener("click", (e) => {
          console.log("Child");
        });

        function sayHi() {
          console.log("Hi, Yangon!")
        }
*/

/*
    //အဆင့် ၅
    const divs = document.querySelectorAll("div");
        divs.forEach((div) => {
          div.addEventListener("click", () => {
            console.log("Hi, မြန်မာ!");
          });
        });//ယခင်ရှိပြီးသား divတွေကို နှိပ်မှထွက်လာမှာ၊ အသစ်ထပ်လုပ်လိုက်တဲ့ div ကိုနှိပ်ရင် ထွက်မလာပါဘူး

        const newDiv = document.createElement("div");
        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.backgroundColor = "yellow";
        newDiv.addEventListener("click", () => {
          //then only it will print out "Hi"
          console.log("Hi");
        });
        document.body.append(newDiv);

        //အဆင့် ၅ Deligation
        //Finally, when div is clicked it will print out
        const divs = document.querySelectorAll("div");
        document.addEventListener("click", e => {
          if (e.target.matches("div")) {//when you click on document, this time does not print
            console.log("Hi, Myanmar!");
          }
        });

        //Short one, same as the above type=click; selector=div; callback=(e)=>
        addGlobalEventListener("click", "div", (e) => {
          console.log("Hi, Myanmar");
        });
        //Same as the above
        function addGlobalEventListener(type, selector, callback) {
          document.addEventListener(type, (e) => {
            if (e.target.matches(selector)) callback(e);
          });
        }


    // ============== xxxxxxxxxxxx ================
    */
