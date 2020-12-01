import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { BlazeBs4, Status } from 'meteor/jkuester:blaze-bs4'
import '../imports/startup/client/bootstrap'
//import '../imports/startup/client/routes'
import '../imports/startup/client/templateHelpers'
//import '../imports/ui/templates/code/code.html'

import './main.html';

Template.mainTarget.mainTarget.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()

//  Promise.all([
//    BlazeBs4.button.load(),
//    BlazeBs4.buttongroup.load(),
//    BlazeBs4.buttontoolbar.load()
//  ]).then(loaded => console.log('required templates loaded'))
  

  instance.autorun(() => {
//    FlowRouter.watchPathChange()
//    const currentContext = FlowRouter.current()
//    const { path } = currentContext
//    current.set(path.replace('/meteor-blaze-bs4/', ''))
  })
})

Template.buttons.onCreated(()=>{
  const instance = this
  instance.state = new ReactiveDict()

  BlazeBs4.button.load().then(loaded => { 
      instance.state.set({'loaded':loaded})
    })
})
