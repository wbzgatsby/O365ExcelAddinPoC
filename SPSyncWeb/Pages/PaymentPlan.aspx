<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PaymentPlan.aspx.cs" Inherits="SPSyncWeb.Pages.PaymentPlan" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="../Content/PTP.css" />

    <script type="text/javascript" src="../Scripts/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="../Scripts/ptp.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="ptp-wrapper">
        <div class="titlebar">
            <span>Payment Plan</span>
        </div>
        <div id="paymentPlanDialog" title="Payment Plan">
            <%--<div class="dialog_subtitle"><div>Amount:</div><div class="amount_sum"></div><div>&nbsp;&nbsp;Outstanding:</div><div class="outstanding_sum"></div></div>--%>
            <div class="dialog_subtitle"><div>Amount:</div><div id="div_Amount" runat="server" class="amount_sum"></div><div style="padding-left:50px;">Outstanding:</div><div id="div_OutStanding" runat="server" class="outstanding_sum"></div></div>
            <div class="paymentplan_input_container">
                <div class="paymentplan_input_wrapper open">
                    <div class="paymentplan_input_title">
                        <div class="payment_index">1</div><div>Amount:</div><div class="payment_percent">%</div><div class="ptp-amount-paidon">paid on</div><div class="payment_date"></div><div class="arrow"></div>
                    </div>
                    <div class="paymentplan_input_box">
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Amount %: </div><div class="inputsign">%</div><div class="inputbox"><input id="txt_Amount1" runat="server" class="payamount" size="15" type="text" /></div>
                        </div>
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Paid date:</div><div class="inputsign"></div><div class="inputbox"><input id="txt_PayDate1" runat="server" class="paydate" size="15" type="text" /></div>
                        </div>
                    </div>
                </div>
                <div class="paymentplan_input_wrapper">
                    <div class="paymentplan_input_title">
                        <div class="payment_index">2</div><div>Amount:</div><div class="payment_percent">%</div><div class="ptp-amount-paidon">paid on</div><div class="payment_date"></div><div class="arrow"></div>
                    </div>
                    <div class="paymentplan_input_box">
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Amount %: </div><div class="inputsign">%</div><div class="inputbox"><input id="txt_Amount2" runat="server" class="payamount" size="15" type="text" /></div>
                        </div>
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Paid date:</div><div class="inputsign"></div><div class="inputbox"><input id="txt_PayDate2" runat="server" class="paydate" size="15" type="text" /></div>
                        </div>
                    </div>
                </div>
                <div class="paymentplan_input_wrapper hide">
                    <div class="paymentplan_input_title">
                        <div class="payment_index">3</div><div>Amount:</div><div class="payment_percent">%</div><div class="ptp-amount-paidon">paid on</div><div class="payment_date"></div><div class="arrow"></div>
                    </div>
                    <div class="paymentplan_input_box">
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Amount %: </div><div class="inputsign">%</div><div class="inputbox"><input id="txt_Amount3" runat="server" class="payamount" size="15" type="text" /></div>
                        </div>
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Paid date:</div><div class="inputsign"></div><div class="inputbox"><input id="txt_PayDate3" runat="server" class="paydate" size="15" type="text" /></div>
                        </div>
                    </div>
                </div>
                <div class="paymentplan_input_wrapper hide">
                    <div class="paymentplan_input_title">
                        <div class="payment_index">4</div><div>Amount:</div><div class="payment_percent">%</div><div class="ptp-amount-paidon">paid on</div><div class="payment_date"></div><div class="arrow"></div>
                    </div>
                    <div class="paymentplan_input_box">
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Amount %: </div><div class="inputsign">%</div><div class="inputbox"><input id="txt_Amount4" runat="server" class="payamount" size="15" type="text" /></div>
                        </div>
                        <div class="paymentplan_input_line">
                            <div class="inputlabel">Paid date:</div><div class="inputsign"></div><div class="inputbox"><input id="txt_PayDate4" runat="server" class="paydate" size="15" type="text" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="paymentplan_add">Add New Segment</div>
            <div class="paymentplan_comment"><textarea id="txt_Comments" runat="server" placeholder="Add your comments here"></textarea></div>
        </div>
        <div class="ptp-buttonpane">
            <div class="buttonset">
                <%--<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button">
                    <span class="ui-button-text">Confirm</span>
                </button>
                <button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button">
                    <span class="ui-button-text">Cancel</span>
                </button>--%>
                <asp:Button ID="bt_Confirm" runat="server" CssClass="ptp-button" Text="Confirm" OnClick="bt_Confirm_Click" />
                <asp:Button ID="bt_Cancel" runat="server" CssClass="ptp-button" Text="Cancel" />
            </div>
        </div>
    </div>
    </form>
</body>
</html>
