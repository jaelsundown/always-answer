import React from "react"
import styled from "styled-components"

import Body from "../../components/body"
import Header from "../../components/header"
import Footer from "../../components/footer"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
`

const GetAQuotePage = () => {
  return (
    <PageContainer>
      <Header />
      <Body styles={{ margin: '40px auto 150px auto' }}>
        <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'>
          <form action='https://crm.zoho.com/crm/WebToLeadForm' name="WebToLeads879628000009174057" method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory879628000009174057()' accept-charset='UTF-8'>
            <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='190333be5d0e16b77cecf8a8bdfb2ad3c4a0347284941a387dc9833cbc9539d3'></input>
            <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
            <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='83a4a7224fadf3a3fd9b4e77088cc4a33e4e1125a9a64185e214f95f9731abb4'></input>
            <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM='></input>
            <input type='text' style={{ display: 'none' }} name='returnURL' value='http&#x3a;&#x2f;&#x2f;alwaysanswer.com&#x2f;thank-you&#x2f;'></input>
            <input type='text' style={{ display: 'none' }} id='ldeskuid' name='ldeskuid'></input>
            <input type='text' style={{ display: 'none' }} id='LDTuvid' name='LDTuvid'></input>
            <div class='zcwf_title'>Get Pricing</div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='First_Name'>FIRST NAME<span style={{ color: 'red' }}>*</span></label>
                </div>
                <input type='text' id='First_Name' name='First Name' maxlength='40'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Last_Name'>LAST NAME<span style={{ color: 'red' }}>*</span></label>
                </div>
                <input type='text' id='Last_Name' name='Last Name' maxlength='80'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Company'>COMPANY<span style={{ color: 'red' }}>*</span></label>
                </div>
                <input type='text' id='Company' name='Company' maxlength='200'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Email'>EMAIL</label>
                </div>
                <input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Phone'>PHONE</label>
                </div>
                <input type='text' id='Phone' name='Phone' maxlength='30'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Website'>WEBSITE</label>
                </div>
                <input type='text' id='Website' name='Website' maxlength='255'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='LEADCF2'>REFFERAL SOURCE</label>
                </div>
                <input type='text' id='LEADCF2' name='LEADCF2' maxlength='30'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='LEADCF8'>SERVICE TYPE<span style={{ color: 'red' }}>*</span></label>
                </div>
                <select class='zcwf_col_fld_slt' id='LEADCF8' name='LEADCF8'  >
                  <option value='-None-'>-None-</option>
                  <option value='Messaging&#x20;Only'>Messaging Only</option>
                  <option value='Emergency&#x20;Dispatch'>Emergency Dispatch</option>
                  <option value='Appointment&#x20;Scheduling'>Appointment Scheduling</option>
                  <option value='Order&#x20;Taking'>Order Taking</option>
                  <option value='Customer&#x20;Support'>Customer Support</option>
                  <option value='Technical&#x20;Support'>Technical Support</option>
                  <option value='Voicemail&#x20;Only'>Voicemail Only</option>
                  <option value='Other'>Other</option>
                </select>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='LEADCF9'>EXPECTED CALLS PER DAY<span style={{ color: 'red' }}>*</span></label>
                </div>
                <select class='zcwf_col_fld_slt' id='LEADCF9' name='LEADCF9'>
                  <option value='-None-'>-None-</option>
                  <option value='1-5&#x20;per&#x20;day'>1-5 per day</option>
                  <option value='5-10&#x20;per&#x20;day'>5-10 per day</option>
                  <option value='10-20&#x20;per&#x20;day'>10-20 per day</option>
                  <option value='20-30&#x20;per&#x20;day'>20-30 per day</option>
                  <option value='30-50&#x20;per&#x20;day'>30-50 per day</option>
                  <option value='50-75&#x20;per&#x20;day'>50-75 per day</option>
                  <option value='75-100&#x20;per&#x20;day'>75-100 per day</option>
                  <option value='100-250&#x20;per&#x20;day'>100-250 per day</option>
                  <option value='250&#x2b;&#x20;per&#x20;day'>250&#x2b; per day</option>
                </select>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Description'>DESCRIPTION</label>
                </div>
                <textarea id='Description' name='Description'></textarea>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row wfrm_fld_dpNn'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Lead_Source'>Lead Source</label>
                </div>
                <select class='zcwf_col_fld_slt' id='Lead_Source' name='Lead Source'>
                  <option value='-None-'>-None-</option>
                  <option value='Alacrity'>Alacrity</option>
                  <option value='Answer1st&#x20;Website'>Answer1st Website</option>
                  <option value='ASA'>ASA</option>
                  <option selected value='CCA'>CCA</option>
                  <option value='Client&#x20;Line'>Client Line</option>
                  <option value='Existing&#x20;Client'>Existing Client</option>
                  <option value='MyReceptionist.com'>MyReceptionist.com</option>
                  <option value='Networking&#x20;Group'>Networking Group</option>
                  <option value='Other'>Other</option>
                  <option value='Phone&#x20;Book'>Phone Book</option>
                  <option value='Referral'>Referral</option>
                  <option value='Returning&#x20;Client'>Returning Client</option>
                  <option value='Walk-In'>Walk-In</option>
                  <option value='Web&#x20;Lead&#x20;&#x28;other&#x29;'>Web Lead &#x28;other&#x29;</option>
                </select>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row wfrm_fld_dpNn'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='LEADCF1'>Lead Origin</label>
                </div>
                <select class='zcwf_col_fld_slt' id='LEADCF1' name='LEADCF1'>
                  <option value='-None-'>-None-</option>
                  <option value='Blind&#x20;Registration'>Blind Registration</option>
                  <option value='Calendly'>Calendly</option>
                  <option value='Chat'>Chat</option>
                  <option value='Contact&#x20;Us'>Contact Us</option>
                  <option value='Email'>Email</option>
                  <option value='Other'>Other</option>
                  <option value='Phone'>Phone</option>
                  <option value='PPC&#x20;Form'>PPC Form</option>
                  <option value='Walk-In'>Walk-In</option>
                  <option selected value='Web&#x20;Submission&#x20;Form'>Web Submission Form</option>
                  <option value='7&#x20;Day&#x20;Free&#x20;Trial'>7 Day Free Trial</option>
                </select>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'></div>
                <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit' />
                <input type='reset' class='zcwf_button' name='reset' value='Reset' title='Reset' />
              </div>
            </div>
          </form>
        </div>
      </Body>
      <Footer />
    </PageContainer>
  )
}

export default GetAQuotePage
