1.Using getElementById method we can get an element from dom tree using unique id name. It will get only one element.
Using getElementByClassName method we can get an array of html element by using class name from the dom tree.
QuerySelector will give us first element from the dom tree . We can use any css selector to get it.
QuerySelectorAll will give us a node list of html element . Any css selector can be used here.

2.We can create an element and insert it step by step. First we need to get a parent element using any get element method 
then we need to create an element using createElement() method. We need to add content or styling in the new element to 
show in th browser. Then we have to add it to the parent element using apendChild() method.

3.Event Bubbling is an event happens when we click an element inside the dom tree. 
First when we clicked an element in the dom tree it goes down to tree and go to the actual element which is targeted
then it reaches the actual element that has been clicked. Then it goes up climbing up the tree one by one .
First the parent then the parent's parent until it goes all the way up and activating event on the way.

4.Event Delegation is a technique where we attach a event linstener to the parent.
When clicked it uses the Bubbling technique to navigate the parent element.
instead of multiple event listener we can use one event listener and navigate multiple element.
It makes event listening easy because we don't have use hundreds event listener.
When clicked it goes up and we can get parent element using event.target.parentNode method.

5. preventDefault() method is used to prevent the dafault behaviour of an event .
To prevent default behaviour of an anchor tag or submit button we use the preventDefault() method
as per I undestand. And stopPropagation() is used to stop Bubbling event to execute .
It stops the bubbling up event right away.So after reaching the targeted element it never goes up if used this method.
