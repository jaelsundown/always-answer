// GET PRICING FORM ZOHO SCRIPT

function validateEmail879628000009174057() {
  var form = document.forms["WebToLeads879628000009174057"]
  var emailFld = form.querySelectorAll("[ftype=email]")
  var i
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@")
      var dotpos = emailVal.lastIndexOf(".")
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ")
        emailFld[i].focus()
        return false
      }
    }
  }
  return true
}

function checkMandatory879628000009174057() {
  var mndFileds = new Array(
    "Company",
    "First Name",
    "Last Name",
    "LEADCF8",
    "LEADCF9"
  )
  var fldLangVal = new Array(
    "Company",
    "First\x20Name",
    "Last\x20Name",
    "Service\x20Type",
    "Expected\x20Calls\x20Per\x20Day"
  )
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj = document.forms["WebToLeads879628000009174057"][mndFileds[i]]
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.")
          fieldObj.focus()
          return false
        }
        alert(fldLangVal[i] + " cannot be empty.")
        fieldObj.focus()
        return false
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.")
          fieldObj.focus()
          return false
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i])
          fieldObj.focus()
          return false
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value
        }
      } catch (e) {}
    }
  }
  trackVisitor()
  if (!validateEmail879628000009174057()) {
    return false
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true)
}

function tooltipShow879628000009174057(el) {
  var tooltip = el.nextElementSibling
  var tooltipDisplay = tooltip.style.display
  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over")
    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none"
    }
    tooltip.style.display = "block"
  } else {
    tooltip.style.display = "none"
  }
}

// CUSTOMER CARE ZOHO FORM SCRIPT

function validateEmail879628000009259003() {
  var form = document.forms["WebToCases879628000009259003"]
  var emailFld = form.querySelectorAll("[ftype=email]")
  var i
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@")
      var dotpos = emailVal.lastIndexOf(".")
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ")
        emailFld[i].focus()
        return false
      }
    }
  }
  return true
}

function checkMandatory879628000009259003() {
  var mndFileds = new Array(
    "Case Origin",
    "Subject",
    "Phone",
    "Description",
    "CASECF7"
  )
  var fldLangVal = new Array(
    "Case\x20Origin",
    "Subject",
    "Phone",
    "Description",
    "Name"
  )
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj = document.forms["WebToCases879628000009259003"][mndFileds[i]]
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.")
          fieldObj.focus()
          return false
        }
        alert(fldLangVal[i] + " cannot be empty.")
        fieldObj.focus()
        return false
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.")
          fieldObj.focus()
          return false
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i])
          fieldObj.focus()
          return false
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value
        }
      } catch (e) {}
    }
  }
  if (!validateFileUpload879628000009259003()) {
    return false
  }

  if (!validateEmail879628000009259003()) {
    return false
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true)
}

function validateFileUpload879628000009259003() {
  var uploadedFiles = document.getElementById("theFile879628000009259003")
  var totalFileSize = 0
  if (uploadedFiles.files.length > 3) {
    alert("You can upload a maximum of three files at a time.")
    return false
  }
  if ("files" in uploadedFiles) {
    if (uploadedFiles.files.length != 0) {
      for (var i = 0; i < uploadedFiles.files.length; i++) {
        var file = uploadedFiles.files[i]
        if ("size" in file) {
          totalFileSize = totalFileSize + file.size
        }
      }
      if (totalFileSize > 20971520) {
        alert("Total file(s) size should not exceed 20MB.")
        return false
      }
    }
  }
  return true
}

function tooltipShow879628000009259003(el) {
  var tooltip = el.nextElementSibling
  var tooltipDisplay = tooltip.style.display
  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over")
    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none"
    }
    tooltip.style.display = "block"
  } else {
    tooltip.style.display = "none"
  }
}

// BILLING ZOHO FORM SCRIPT

function validateEmail879628000009259091() {
  var form = document.forms["WebToCases879628000009259091"]
  var emailFld = form.querySelectorAll("[ftype=email]")
  var i
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@")
      var dotpos = emailVal.lastIndexOf(".")
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ")
        emailFld[i].focus()
        return false
      }
    }
  }
  return true
}

function checkMandatory879628000009259091() {
  var mndFileds = new Array(
    "Case Origin",
    "Subject",
    "Phone",
    "Description",
    "CASECF7"
  )
  var fldLangVal = new Array(
    "Case\x20Origin",
    "Subject",
    "Phone",
    "Description",
    "Name"
  )
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj = document.forms["WebToCases879628000009259091"][mndFileds[i]]
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.")
          fieldObj.focus()
          return false
        }
        alert(fldLangVal[i] + " cannot be empty.")
        fieldObj.focus()
        return false
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.")
          fieldObj.focus()
          return false
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i])
          fieldObj.focus()
          return false
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value
        }
      } catch (e) {}
    }
  }
  if (!validateFileUpload879628000009259091()) {
    return false
  }

  if (!validateEmail879628000009259091()) {
    return false
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true)
}

function validateFileUpload879628000009259091() {
  var uploadedFiles = document.getElementById("theFile879628000009259091")
  var totalFileSize = 0
  if (uploadedFiles.files.length > 3) {
    alert("You can upload a maximum of three files at a time.")
    return false
  }
  if ("files" in uploadedFiles) {
    if (uploadedFiles.files.length != 0) {
      for (var i = 0; i < uploadedFiles.files.length; i++) {
        var file = uploadedFiles.files[i]
        if ("size" in file) {
          totalFileSize = totalFileSize + file.size
        }
      }
      if (totalFileSize > 20971520) {
        alert("Total file(s) size should not exceed 20MB.")
        return false
      }
    }
  }
  return true
}

function tooltipShow879628000009259091(el) {
  var tooltip = el.nextElementSibling
  var tooltipDisplay = tooltip.style.display
  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over")
    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none"
    }
    tooltip.style.display = "block"
  } else {
    tooltip.style.display = "none"
  }
}
