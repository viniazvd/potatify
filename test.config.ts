
import * as VueTestUtils from "@vue/test-utils"

// ISSO MOCKA O VALOR DO AUTO ANIMATE
// PRA NÃO PRECISAR SER CRIADO EM TODOS OS ARQUIVOS
// DE TESTE
VueTestUtils.config.global.directives = {
  autoAnimate: {}
}