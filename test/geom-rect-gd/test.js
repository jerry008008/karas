var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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Goeddd+K1/cxjDMU+5mH49y80U3ninG9YVj6orODLt0c9V/5K215o/0JS69eGgPz45pjXs746z9XlBt97bvunXIv5tUxj19/KN3KQR/95QnAsRNoNo19YK5BF8dcnXPrrNvujq2vZ5G+nG6Pto+6TAMvMxBLLXp00HVGYSvOtQ+6FkCycy4zCEfn3M4UrLXm7bUyxpmAh51yX2vuyxml5pyd9MVUHs+lB9NtBPrYr07v/+gJzAJ9W7r/fOv1qpPOldNtR731/HJSy1qfdfGp9QZiWZCpna/X1qPbuX+l1W6crDLltTbilc6Ndhmm+hN7336WtTTad5x/RfXOuScykiwUakGpfDYpNerpV9sDdvU++osTAARmgb493TvPJOylY80xrzvnvlZda9htbbtfLW+8mbg2EzEXHGp3R5XZOmm71KBLQttV7PoFkdbW2Fh2Z4wTTNa6M6oznhx1rSH3TnjpmJeOujjw1onfl17MQbs+EThyArNAvzjd29SgSy26rUkXX7jmD1vvN/rBIuZrrXtn6/ZoG9zK6nf9Gh1bNegszu2aG+16enU6d1lE9fDMv2VL3Fof87LmvE5s+RmlJXxfegmBPvKL09tHYBbol6R7uhp0W0Peqkmv16izc+5r0Nu16uyo1ya95LLK2qp4kzjnW3yl5S476KkvOq8H3a//XF+d+55bx1zOUJf8bG8EHprxt15bHrsxam25ff2y5pzFudag700vJdCuTwSOnMAs0C9N91xy0KPfO3xcZKetURcPuV7TLlXbNae9nEbezkTsnXRdybn0aZQlksoKdrX2XGcMtp0apVtjXCx/q+O7rz0v3139VbNOpfwaOgvhe9MdBPrIL05vH4FGoO++VIMuDnjtceyTXvZNl/7p+tiXSybHvOa8t510P428XQ2v3XllzUG3O6XUJUEnB33aesxbM/6qw23LEW0Nujjo0UlvHY+vL8cXCLSrE4GjJzAL9B3p7qEPepKgsRadj0fveNrx8ue0t8VaR73Vh9162n4TgL4vuuyoUpYWrdtW9dtTjd3Z7doY633Lh6rxfQX+NBrj54t8PP78C+llHPTRX54AHDuBRqDvahx0e2OvivTofNva9FizvpzjZdfIWg27lj/6hZb6WnSpQZdp3e2NwDIDcJz51/cxl/LEWrfF6KDPejy9bqxBj+fJx8VB302gj/3a9P4R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')
      .end();
  }
};
