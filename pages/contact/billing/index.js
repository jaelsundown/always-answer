import React from "react"
import styled from "styled-components"

import Body from "../../../components/body"
import Footer from "../../../components/footer"
import Header from "../../../components/header"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
`

const BillingPage = () => {
  return (
    <PageContainer>
      <Header />
      <Body styles={{ margin: '40px auto 150px auto' }}>
        <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'>
          <form action='https://crm.zoho.com/crm/WebToCaseForm' name="WebToCases879628000009259091" method='POST' enctype='multipart/form-data' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory879628000009259091()' accept-charset='UTF-8'>
            <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='190333be5d0e16b77cecf8a8bdfb2ad3c4a0347284941a387dc9833cbc9539d3'></input>
            <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
            <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='83a4a7224fadf3a3fd9b4e77088cc4a3ce6339de6e7659e91c780050c1e09ccb'></input>
            <input type='text' style={{ display: 'none' }} name='actionType' value='Q2FzZXM='></input>
            <input type='text' style={{ display: 'none' }} name='returnURL' value='http&#x3a;&#x2f;&#x2f;callcenteragency.com&#x2f;thank-you&#x2f;'></input>
            <div class='zcwf_title'>Contact Billing</div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Subject'>Subject<span style={{ color : 'red' }}>*</span></label>
                </div>
                <input type='text' id='Subject' name='Subject' maxlength='300'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='CASECF7'>Name<span style={{ color: 'red' }}>*</span></label>
                </div>
                <input type='text' id='CASECF7' name='CASECF7' maxlength='255'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='CASECF116'>Account Number</label>
                </div>
                <input type='text' id='CASECF116' name='CASECF116' maxlength='10'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Phone'>Phone<span style={{ color: 'red' }}>*</span></label>
                </div>
                <input type='text' id='Phone' name='Phone' maxlength='300'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='CASECF4'>Ext</label>
                </div>
                <input type='text' id='CASECF4' name='CASECF4' maxlength='10'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Email'>Email</label>
                </div>
                <input type='text' ftype='email' id='Email' name='Email' maxlength='300'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Description'>Description<span style={{ color: 'red' }}>*</span></label>
                </div>
                <textarea id='Description' name='Description'></textarea>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>Upload a File</div>
                <div class='clearB'>
                  <input type='file' class='zcwf_file' name='theFile' id='theFile879628000009259091' multiple />
                  <div class='zcwf_col_help'></div>
                </div>
                <p class="file-size-limit-text">File(s) size limit is 20MB.</p>
              </div>
            </div>
            <div class='zcwf_row wfrm_fld_dpNn'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Type'>Type</label>
                </div>
                <select class='zcwf_col_fld_slt' id='Type' name='Type'>
                  <option value='-None-'>-None-</option>
                  <option selected value='Billing'>Billing</option>
                  <option value='Cancelation'>Cancelation</option>
                  <option value='Customer&#x20;Care'>Customer Care</option>
                  <option value='Operations'>Operations</option>
                  <option value='Sales'>Sales</option>
                  <option value='Technical'>Technical</option>
                </select>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            <div class='zcwf_row wfrm_fld_dpNn'>
              <div class='zcwf_col_fld'>
                <div class='zcwf_col_lab'>
                  <label for='Case_Origin'>Case Origin<span style={{ color: 'red' }}>*</span></label>
                </div>
                <select class='zcwf_col_fld_slt' id='Case_Origin' name='Case Origin'>
                  <option value='-None-'>-None-</option>
                  <option value='610'>610</option>
                  <option value='Chat'>Chat</option>
                  <option value='Client&#x20;Visit'>Client Visit</option>
                  <option value='Contact&#x20;Us'>Contact Us</option>
                  <option value='Email'>Email</option>
                  <option value='Fax'>Fax</option>
                  <option value='In-house'>In-house</option>
                  <option value='Mail'>Mail</option>
                  <option value='Phone'>Phone</option>
                  <option selected value='Web&#x20;Form'>Web Form</option>
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

export default BillingPage
