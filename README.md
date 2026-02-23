1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : The Difference Between getElementById, getElementsByClassName, querySelector, and querySelectorAll is Based on How They Select Elements and What They return. The getElementById Method selects a Single Element using its id. The getElementsByClassName Method selects Multiple Elements using a class name and returns a live HTMLCollection. On the other hand, querySelector returns The First Matching Element using Css selectors, While querySelectorAll returns all matching elements as a static NodeList. QuerySelector Methods are more Flexible Because They Support Full Css selector syntax.

2. How do you create and insert a new element into the DOM?

To Create and Insert a New Element into the DOM, We First use the document.createElement() method to create the element. Then, We can add content using innerText or innerHTML. Finally, We insert the element into the DOM using methods like appendChild(), append(), or prepend() on a parent Element. This Allows us to Dynamically add new Elements to a Webpage using JavaScript.

3. What is Event Bubbling? And how does it work?

Event Bubbling is a process in JavaScript Where an event starts from the Target Element and then Propagates upward to its parent Elements in the DOM tree. When an event Occurs on a Child element, it First runs on that Element and then moves up step by step to its parent, grandparent, and so on until it reaches the root. This allows parent elements to Handle events Triggered on their child Elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a Technique in JavaScript where we attach a single event listener to a parent element instead of adding event listeners to Multiple child elements. It works because of event bubbling, Where the event moves up from the child to the parent. This Technique is useful because it improves Performance, reduces memory usage, and allows us to handle Dynamically added elements easily.

5. What is the difference between preventDefault() and stopPropagation() methods?

The Difference Between preventDefault() and stopPropagation() is related to How they Control events. The preventDefault() method stops the browser’s default behavior for an event, such as preventing a form from Submitting or a link from navigating. On the other hand, stopPropagation() prevents the event from moving up or down the DOM tree, meaning it stops event bubbling or Capturing. In short, preventDefault() controls the default action, while stopPropagation() controls event flow.