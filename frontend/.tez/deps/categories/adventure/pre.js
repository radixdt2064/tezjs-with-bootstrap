
        import header from "/@/components/header.vue";import articles from "/@/components/articles.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/categories/adventure","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/c271ac8fdea08f05b257c673efcc7cb7"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Adventure Category Articles","canonical":"http://localhost:3000/categories/adventure","metaTag":{"name":{"description":"Adventure Articles"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/categories/adventure/post.js")
            })
        }    