describe("Payments test (with setup and tear-down)", function() {
    beforeAll(function () {
      // initialization logic
      // needs input values
      billAmtInput.value = 125.65;
      tipAmtInput.value = 28.90;

    });
  
    it('should return valid for positive values', function () {
      // createCurPayment() will return undefined with negative or empty inputs
        // positive billAmt is required but tip can be 0

        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments.payment1.tipPercent).toBeCloseTo(23);
  
    });

    it('should return undefined for a negative or empty input', function () {
      // createCurPayment() will return undefined with negative or empty inputs
        // positive billAmt is required but tip can be 0
        billAmtInput.value='';
        submitPaymentInfo();
        expect(Object.keys(allServers).length).toEqual(0);

        billAmtInput.value=0;
        submitPaymentInfo();
        expect(Object.keys(allServers).length).toEqual(0);
  
    });

    it('should verify the payment is deleted from allPayments',function (){
      deleteSelectedPayment(billAmtInput);
      UpdatePaymentElement();
      updateServerTable();
      updateSummary();
      expect(Object.keys(allPayments).length).toEqual(0);
  
    });

    afterEach(function() {
      // teardown logic
      billAmtInput.value='';
      tipAmtInput.value='';
      allPayments={};
      paymentTbody.remove();
      updateSummary();
    });
  });