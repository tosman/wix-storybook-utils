import {popoverPrivateDriverFactory} from './Popover.driver.private';

export const popoverDriverFactory = ({element, eventTrigger}) => {
  const p = popoverPrivateDriverFactory({element, eventTrigger});
  
  return {
    exists: () => !!element,
    getTargetElement: p.getTargetElement,
    getContentElement: p.getContentElement,
    isTargetElementExists: p.isTargetElementExists,
    isContentElementExists: p.isContentElementExists,   
    mouseEnter: () => eventTrigger.mouseEnter(element),
    mouseLeave: () => eventTrigger.mouseLeave(element),
    click: () => eventTrigger.click(element),
    inlineStyles: () => element.style,
  }
};
