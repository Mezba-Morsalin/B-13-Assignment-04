1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : The Difference Between getElementById, getElementsByClassName, querySelector, and querySelectorAll is Based on How They Select Elements and What They returning. The getElementById selects a Single Element using its id. The getElementsByClassName selects Multiple Elements using a class name and returns a live HTMLCollection. On the other hand, querySelector returns The First Matching Element using Css selectors, other hand querySelectorAll returns all matching elements as a static NodeList. QuerySelector is more Flexible than HTML Collection Because They Support Full Css selector elements.

2. How do you create and insert a new element into the DOM?

Ans : To Create and Insert a New Element into the DOM, We First use the document.createElement()  to create the element. Then, We add content using innerText or innerHTML. Finally, We add the element into the DOM using like appendChild(), append(), or prepend() on a parent Element. This Allows us to Dynamically add new Elements to a Webpage using JavaScript.

3. What is Event Bubbling? And how does it work?

Ans : Event Bubbling is a process in JavaScript Where an event starting from the Target Elements and then Propagating upward to its parent Elements in the DOM tree. When an event searching in a Child element, It First runs come on that Element and then move up step by step to its parent, grandparent, and so on until it reached the root. This allows parent elements to Handle events Triggered on their child Elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans : Event Delegation is a Technique in JavaScript where we attached a single event listener to a parent element instead of add event listeners to Multiply child elements. It works because of event bubbling, Where the event moving up from the child to the parent. This Technique is useful because it improves Performance, come down memory usage, and allows us to handle Dynamically adding elements easily.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : The Difference of preventDefault() and stopPropagation() is related How they Control event. The preventDefault() method stops the browsers default behavior for an event, such as preventing a form from Submitting or a link from navigate. On the other hand, stopPropagation() prevents the event from moving up or down the DOM tree, meaning it stops event bubbling or Capturing. In shows, preventDefault() controls the default action, while stopPropagation() controls event flowing.