package org.snoopdesigns.webapp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SendHandler extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("POST called!");
        System.out.println(request.getParameter("realname"));
        System.out.println(request.getParameter("email"));
        System.out.println(request.getParameter("comments"));
    }
}
