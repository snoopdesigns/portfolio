package org.snoopdesigns.webapp;

import java.io.IOException;
import java.net.URL;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.server.nio.SelectChannelConnector;
import org.eclipse.jetty.servlet.*;
import org.eclipse.jetty.util.resource.ResourceCollection;
import org.eclipse.jetty.webapp.WebAppContext;

public class Main{

    public static void main(String[] args) throws Exception {
        Server server = new Server();
        SelectChannelConnector connector = new SelectChannelConnector();
        connector.setPort(Integer.valueOf(System.getenv("PORT")));
        server.addConnector(connector);

        ServletContextHandler servletContext = new ServletContextHandler(ServletContextHandler.SESSIONS);
        servletContext.setContextPath("/api");
        servletContext.addServlet(new ServletHolder(new SendHandler()), "/post");
        servletContext.addEventListener(new ServletContextListener() {
            @Override
            public void contextInitialized(ServletContextEvent servletContextEvent) {
                System.out.println("Context initialized called!");
            }

            @Override
            public void contextDestroyed(ServletContextEvent servletContextEvent) {
                System.out.println("Context destroyed called!");
            }
        });
        servletContext.setServer(server);

        WebAppContext webAppContext = new WebAppContext();
        webAppContext.setContextPath("/");
        webAppContext.setWar("src/main/resources/webapp");
        webAppContext.setWelcomeFiles(new String[] {"index.html"});

        HandlerList handlers = new HandlerList();
        handlers.setHandlers(new Handler[] { servletContext, webAppContext, new DefaultHandler() });
        server.setHandler(handlers);

        server.start();
        server.join();
    }
}
