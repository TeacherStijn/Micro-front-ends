export default class BggCart extends HTMLElement {

    #input;

    /* create a 'connectedCallback()' function (fixed name)
       in which we will do:
       - add an event listener on the 'window' object, listening to the event we made in the other component
       - the event listener will contain:
            - (optional): writing the 'detail' property of the event to a local class variable like #input or #data
            - filling the innerHTML property of *this* component with:
                     - an H2 header with the 'name' property of the #input variable set as it's content
                     - an image with it's 'src' attribute set to the .thumbnail property of the #input property
                     - an 'order' or 'save' button, which for now does nothing yet ;).


        create a 'disconnectedCallback()' function for later use

     */
}
