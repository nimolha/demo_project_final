import LoginHRM from "../page_object/login2";
import Buzz from "../page_object/buzz";
import { randSentence, randWord } from "@ngneat/falso";

describe('should be able to add post',()=>{
    const log = new LoginHRM();
    const buzze = new Buzz();
    
    it('should be able to add post with only Text',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.post(randSentence());
    })

    it('should be able to add post with image',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.photo();
    })
    it('should be able to like post with image',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.liking_post();
    })
    it('should be able to comment post with image',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.commenting_post(randWord());
    })
    it('should be able to share post with image',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.share_post(randWord());
    })
    it('should be able to edit post',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.edit_post(randWord());
    })
    it('should be able to delete post',()=>{
        log.visit2();
        log.credentials('Admin', 'admin123');
        buzze.vivsit();
        buzze.delete_post();
    })
})