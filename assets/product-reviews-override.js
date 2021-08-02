$(document).ready(function() {

    // block_to_insert = document.createElement('div');
    // block_to_insert.innerHTML = 'This demo DIV block was inserted into the page using JavaScript.';

    // container_block = document.getElementById('spr-review-122360113');
    // container_block.appendChild(block_to_insert);


        console.log(123456);
        let ele = document.createElement('p');
        let container = document.querySelector('.spr-review');
        console.log(container);

        ele.innerHTML = 'asdfasdfasdf';
        console.log(ele);
        container.appendChild(ele);
        console.log(container);
        // $("#spr-review-122360113").append("<p>This is a paragraph</p>");
        console.log($("#spr-review-122360113"));

});

