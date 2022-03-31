var $zoho = $zoho || { salesiq: { values: {}, ready: function () {} } }
var d = document
s = d.createElement("script")
s.type = "text/javascript"
s.defer = true
s.src =
  "https://salesiq.zoho.com/callcenterchat/float.ls?embedname=callcenterchat"
t = d.getElementsByTagName("script")[0]
t.parentNode.insertBefore(s, t)
function trackVisitor() {
  try {
    if ($zoho) {
      var LDTuvidObj = document.forms["WebToLeads879628000009174057"]["LDTuvid"]
      if (LDTuvidObj) {
        LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid()
      }
      var firstnameObj =
        document.forms["WebToLeads879628000009174057"]["First Name"]
      if (firstnameObj) {
        name = firstnameObj.value + " " + name
      }
      $zoho.salesiq.visitor.name(name)
      var emailObj = document.forms["WebToLeads879628000009174057"]["Email"]
      if (emailObj) {
        email = emailObj.value
        $zoho.salesiq.visitor.email(email)
      }
    }
  } catch (e) {}
}
