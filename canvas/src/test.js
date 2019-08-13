var scope = 'global'
function fn(){
  console.log(scope)
   scope = 'local'
  console.log(scope)
}
fn()
console.log(scope)