module.exports = {
    paths: {
      "/api-docs/create": {
        post: {
          tags: {
            Users: "Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
    },
    "/api-docs/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update a task",
          },
          description: "Update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
          },
        },
      },
  
  };
  