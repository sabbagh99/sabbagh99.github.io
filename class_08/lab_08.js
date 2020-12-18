

// var WlcMassage = "Welcome in the world of information"

// alert(WlcMassage);
(function createGreeting(){
    var name = prompt("What is your name?");
    alert("Hello " + name);

    let age = prompt('What is your age'); 
    let advice;
  
    if (age > 1 && age < 18) {
      advice = 'We advice you to see Maths book!';
    } else if (age > 18 && age < 24) {
        advice = ' We advice you to see Sciences book';
    } else if (age >= 24 && age < 80) {
        advice = 'We advice you to see Politics book';
    } else {
        advice = 'Something went wrong!';
    }
    alert(advice);
  })()

    

    let getItem = function() {
        let userInput = prompt('please enter what you need to order? hard copy/pdf');
        let item;
      
        while(userInput !== 'hard copy' && userInput !== 'pdf') {
          userInput = prompt('Please enter something like hard copy or pdf only');
        }
      
        if(userInput === 'hard copy') {
          item = '<img src="https://www.pngitem.com/pimgs/m/500-5004460_stack-of-books-vector-clip-art-book-clipart.png"/>';
        } else if (userInput === 'pdf') {
          item = '<img src="data:image/png;base64,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" />';
        }
      
        return item;
      }

      let howMany = function() {
        let count = prompt('How many do you want to order?');
      
        while(count === '' || isNaN(count)) {
          count = prompt('Please enter a number!!');
        }
      
        return count;
      }

      const getTotal = ()=>{
        return prompt('How many copy do you want');
      }
      
      let showOrder = function() {
        let item = getItem();
        let total =  getTotal();
        let result = '';
      
        for(let i = 0; i < total; i++) {
          result = result + '<p>Model #' + i + ' ' + item + '</p>';
        }
        // document.write(item);
        return result;
      }
       