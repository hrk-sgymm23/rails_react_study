class Api::V1::IssuesController < ApplicationController
    def index
        @issue = Issue.all
        render json: { status: 200, issues: Issue.all }
    end

    def create
        issue = Issue.new(issue_params)

        if issue.save
            render json: { status: 200, issue: issue }
        else
            render json: { statsus: 500, message: "create error" }
        end
    end

    # def update
    #     @issue = Issue.find(params[:id])
    #     @issue.update_attributes(name: params[:name])
    #     render json: @issue
    # end

    def destroy
        issue = Issue.find(params[:id])

        if issue.destroy
            render json: { status: 200, issue: issue }
        else
            render json: { statsus: 500, message: "delete error" }
        end
    end

    private

    def issue_params
        params.require(:issue).permit(:name)
    end

end
