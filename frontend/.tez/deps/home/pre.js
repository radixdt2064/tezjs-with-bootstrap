
        import header from "/@/components/header.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/home","slots":{},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Blogs Site","canonical":"http://localhost:3000/home","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/home/post.js")
            })
        }    