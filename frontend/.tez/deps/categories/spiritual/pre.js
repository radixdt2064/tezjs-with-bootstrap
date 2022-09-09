
        import header from "/@/components/header.vue";import articles from "/@/components/articles.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/categories/spiritual","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/023b3b642407aae681417bf71ad1362b"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Spiritual Category Articles","canonical":"http://localhost:3000/categories/spiritual","metaTag":{"name":{"description":"Spiritual Articles"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/categories/spiritual/post.js")
            })
        }    