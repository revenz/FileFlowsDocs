---
title: Unraid NVIDIA Setup
name: Unraid NVIDIA Setup
permalink: /guides/unraid/nvidia-setup
layout: default
sub: Unraid
---

To pass your NVIDIA GPU to the docker container you must do the following

## Get your GPU ID
Get your GPU ID from the settings page
> ![image](https://user-images.githubusercontent.com/958400/148124424-b72e04e7-a65a-452d-afb5-319ec47717b5.png)

Here mine is "GPU-7f326d12-d4c8-4011-9db1-36c47710daf6"
>![image](https://user-images.githubusercontent.com/958400/148124520-4197ef47-4e9b-4d27-a641-e9cf56b69452.png)


## Update the FileFlows Docker
1. Inside editing the Docker container (or when adding)
2. Switch to Advanced view
>![image](https://user-images.githubusercontent.com/958400/148123916-96b8fb3b-659f-4681-97fa-3d338a6a5a32.png)
>![image](https://user-images.githubusercontent.com/958400/148123945-f598c511-1a93-4533-ac98-af1a654eb912.png)
3. Under "Extra Parameters" insert "--runtime=nvidia"
>![image](https://user-images.githubusercontent.com/958400/148124006-8ee0e2bf-001f-41d1-8dfe-149626cfe38b.png)
4. Add a custom variable by clicking "Add another Path, Port, Variable, Label or Device"
>![image](https://user-images.githubusercontent.com/958400/148124103-86b724b3-7d1c-4670-b572-7b1def9e5ff7.png)
5. Enter the new variable:
```
   Config Type: Variable

   Name: NVIDIA_VISIBLE_DEVICES

   Key: NVIDIA_VISIBLE_DEVICES

   Value: [YOUR GPU UID, EG GPU-7f326d12-d4c8-4011-9db1-36c47710daf6]
```
   >![image](https://user-images.githubusercontent.com/958400/148124313-ca999f0e-fdb0-4817-9751-ee466ae81445.png)
6. Click Save and apply the changes.
7. You should now be able to process videos using your NVIDIA GPU, assuming your GPU supports hardware encoding