class Api::ItemsController < Api::BaseController
    def index
      render json: Book.all
    end
  
    def create
      book = Book.new(book_params)
		if book.save
			render :json => book
		else 
			render :json => {"errors": book.errors.full_messages}
		end
    end
  
    def destroy
      render json: Book.destroy(params[:id])
    end
  
    def update
      book = Book.find(params["id"])
      book.update_attributes(book_params)
      render :json =>  book
    end
  
    private
  
    def book_params
      params.require(:book).permit(:id, :title, :author, :img_url)
    end
  end