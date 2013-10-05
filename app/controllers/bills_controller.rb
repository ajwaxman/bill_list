class BillsController < ApplicationController

  def index
    @bills = Bill.all

    respond_to do |format|
      format.html
      format.json { render json: @bills }
    end
  end

  def show
    @bill = Bill.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @bill }
    end
  end

  def new
    @bill = Bill.new
    respond_to do |format|
      format.html
      format.json { render json: @bill }
    end
  end

  def edit
    @landlord = Bill.find(params[:id])
  end

  def create
    @bill = Bill.new(params[:bill])

    respond_to do |format|
      if @bill.save
        format.html
        format.json { render json: @bill, status: :created, location: @bill}
      else
        format.html { render action: "index" }
        format.json { render json: @bill.errors, status: :unprocessable_entity }
    end
  end

  def update
    @bill = Bill.find(params[:id])

    respond_to do |format|
      if @bill.update_attributes(params[:bill])
        format.html { render action: "index" }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @bill.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @bill = Bill.find(params[:id])
    @bill.destroy

    respond_to do |format|
      format.html { redirect_to bills_url }
      format.json { head :no_content }
    end
  end
end